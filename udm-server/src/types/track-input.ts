import { Field, InputType } from "type-graphql";

@InputType()
export class TrackInput {
    @Field()
    artist!: string;

    @Field()
    title!: string;

    @Field()
    version?: string;

    @Field()
    label?: string;

    @Field()
    image?: string;

    @Field()
    trackUrl!: string;

    @Field()
    buyUrl?: string;
}
