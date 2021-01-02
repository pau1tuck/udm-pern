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
    @Column({ nullable: true })
    label?: string;

    @Field((_type) => String)
    @Column({ nullable: true, default: "" })
    image?: string;

    @Field()
    @Column()
    trackUrl!: string;

    @Field()
    @Column({ nullable: true })
    buyUrl?: string;

    @Field(() => Int)
    @Column({ type: "int", default: 0 })
    votes!: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt!: Date;
}
