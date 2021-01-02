import { ObjectType, Field, ID } from "type-graphql";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    BaseEntity,
    Any,
} from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: true })
    socialId!: string;

    @Field()
    @Column({ length: 128, nullable: true })
    firstName!: string;

    @Field()
    @Column({ length: 128, nullable: true })
    lastName!: string;

    @Field()
    @Column({ length: 128, nullable: true })
    country!: string;

    @Field()
    @Column({ nullable: true })
    avatar!: string;

    @Field()
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column({ default: false })
    verified!: boolean;

    @Field()
    @Column({ default: false })
    isAdmin!: boolean;

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt!: Date;
}
