import {
    Arg,
    Ctx,
    Field,
    FieldResolver,
    InputType,
    Int,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    Root,
    UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Track } from "../entities/Track";
import { isAdmin } from "../utils/permissions";
import { IContext } from "../config/types";

@InputType()
class TrackInput {
    @Field()
    artist!: string;
    @Field()
    title!: string;
    @Field()
    version!: string;
    @Field()
    label!: string;
    @Field()
    youTubeId!: string;
}
@ObjectType()
class PaginatedTracks {
    @Field(() => [Track])
    tracks!: Track[];
    @Field()
    hasMore!: boolean;
}
@Resolver(Track)
export class TrackResolver {
    @Query(() => PaginatedTracks)
    async Tracks(): Promise<PaginatedTracks> {
        const tracks = await getConnection()
            .getRepository(Track)
            .createQueryBuilder("t")
            .orderBy('t."createdAt"', "DESC")
            .getMany();
        return {
            tracks: tracks,
            hasMore: tracks.length === 9,
        };
        // return await Track.find();
    }

    @Query(() => Track, { nullable: true })
    Track(@Arg("id") id: string): Promise<Track | undefined> {
        return Track.findOne(id);
    }

    @Mutation(() => Track)
    @UseMiddleware(isAdmin)
    async createTrack(
        @Arg("input") input: TrackInput,
        @Ctx() { req }: IContext
    ): Promise<Track> {
        return Track.create({
            ...input,
        }).save();
    }

    @Mutation(() => Track, { nullable: true })
    @UseMiddleware(isAdmin)
    async updateTrack(
        @Arg("id") id: string,
        @Arg("artist") artist: string,
        @Arg("title") title: string,
        @Arg("version") version: string,
        @Arg("label") label: string,
        @Arg("youTubeId") youTubeId: string,
        @Ctx() { req }: IContext
    ): Promise<Track | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Track)
            .set({ artist, title, version, label })
            .where("id = :id", {
                id,
            })
            .returning("*")
            .execute();

        return result.raw[0];
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAdmin)
    async deleteTrack(
        @Arg("id") id: string,
        @Ctx() { req }: IContext
    ): Promise<boolean> {
        await Track.delete({ id });
        return true;
    }
}
