import { Field, ID, Int, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Track extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Field()
    @Column()
    artist!: string;

    @Field()
    @Column()
    title!: string;

    @Field()
    @Column({ nullable: true })
    version?: string;

    @Field()
    @Column()
    label!: string;

    @Field()
    @Column()
    youTubeId!: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt!: Date;

    @Field(() => Int)
    @Column({ type: "int", default: 0 })
    votes!: number;
}
