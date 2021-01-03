import {
    Arg,
    Int,
    Mutation,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Track } from "../entities/track";
import { TrackInput } from "../types/track-input";
import { PaginatedTracks } from "../types/paginated-tracks";
import { isAdmin } from "../utils/check-permissions";
import { RedisStore, redisClient } from "../config/redis";
import { TRACKS_CACHE_KEY } from "../config/constants";

@Resolver(Track)
export class TrackResolver {
    @Query(() => PaginatedTracks)
    async Tracks(
        @Arg("limit", () => Int)
        limit: number
    ): Promise<PaginatedTracks> {
        const allTracks =
            (await redisClient.lrange(TRACKS_CACHE_KEY, 0, -1)) || [];
        const tracks = allTracks.map((track: string) => JSON.parse(track));
        return {
            tracks: tracks.slice(0, limit - 1),
            hasMore: tracks.length === limit + 1,
        };
        // return await Track.find();
    }

    @Query(() => Track, { nullable: true })
    Track(@Arg("id") id: string): Promise<Track | undefined> {
        return Track.findOne(id);
    }

    @Mutation(() => Track)
    // @UseMiddleware(isAdmin)
    async CreateTrack(@Arg("input") input: TrackInput): Promise<Track> {
        const newTrack = await Track.create({
            ...input,
        }).save();
        redisClient.lpush(TRACKS_CACHE_KEY, JSON.stringify(newTrack));
        return newTrack;
    }

    @Mutation(() => Track, { nullable: true })
    // @UseMiddleware(isAdmin)
    async UpdateTrack(
        @Arg("id") id: string,
        @Arg("image") image: string,
        @Arg("trackUrl") trackUrl: string,
        @Arg("buyUrl") buyUrl: string
    ): Promise<Track | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Track)
            .set({ image, trackUrl, buyUrl })
            .where("id = :id", {
                id,
            })
            .returning("*")
            .execute();

        return result.raw[0];
    }

    @Mutation(() => Boolean)
    // @UseMiddleware(isAdmin)
    async DeleteTrack(@Arg("id") id: string): Promise<boolean> {
        await Track.delete({ id });
        return true;
    }
}
