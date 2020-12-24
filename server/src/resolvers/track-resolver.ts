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
import { isAdmin } from "../utils/permissions";

@Resolver(Track)
export class TrackResolver {
    @Query(() => PaginatedTracks)
    async Tracks(
        @Arg("limit", () => Int)
        limit: number
    ): Promise<PaginatedTracks> {
        const tracks = await getConnection()
            .getRepository(Track)
            .createQueryBuilder("t")
            .orderBy('t."createdAt"', "DESC")
            .getMany();
        return {
            tracks,
            hasMore: tracks.length === limit + 1,
        };
        // return await Track.find();
    }

    @Query(() => Track, { nullable: true })
    Track(@Arg("id") id: string): Promise<Track | undefined> {
        return Track.findOne(id);
    }

    @Mutation(() => Track)
    @UseMiddleware(isAdmin)
    async CreateTrack(@Arg("input") input: TrackInput): Promise<Track> {
        return Track.create({
            ...input,
        }).save();
    }

    @Mutation(() => Track, { nullable: true })
    @UseMiddleware(isAdmin)
    async UpdateTrack(
        @Arg("id") id: string,
        @Arg("artist") artist: string,
        @Arg("title") title: string,
        @Arg("version") version: string,
        @Arg("label") label: string,
        @Arg("youTubeId") youTubeId: string
    ): Promise<Track | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Track)
            .set({ artist, title, version, label, youTubeId })
            .where("id = :id", {
                id,
            })
            .returning("*")
            .execute();

        return result.raw[0];
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAdmin)
    async DeleteTrack(@Arg("id") id: string): Promise<boolean> {
        await Track.delete({ id });
        return true;
    }
}
