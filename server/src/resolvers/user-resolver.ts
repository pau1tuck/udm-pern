import { Errback } from "express";
import {
    Resolver,
    Query,
    Mutation,
    Arg,
    UseMiddleware,
    Ctx,
} from "type-graphql";
import argon2 from "argon2";
import { User } from "../entities/user";
import { IContext } from "../types/context.d";
import { isAdmin } from "../utils/check-permissions";

@Resolver(User)
export class UserResolver {
    // ALL USERS
    @Query(() => [User])
    @UseMiddleware(isAdmin)
    Users(): Promise<User[]> {
        return User.find();
    }

    // CURRENT USER
    @Query(() => User, { nullable: true })
    CurrentUser(@Ctx() { req }: IContext) {
        if (!req.session.userId) {
            return null;
        }
        return User.findOne(req.session.userId);
    }

    // REGISTER
    @Mutation(() => Boolean)
    async Register(
        @Arg("firstName") firstName: string,
        @Arg("lastName") lastName: string,
        @Arg("country") country: string,
        @Arg("email") email: string,
        @Arg("password") password: string
    ) {
        const encryptedPassword = await argon2.hash(password);

        try {
            await User.insert({
                firstName,
                lastName,
                country,
                email,
                password: encryptedPassword,
            });
        } catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }

    // LOG IN
    @Mutation(() => User, { nullable: true })
    async Login(
        @Arg("email") email: string,
        @Arg("password") password: string,
        @Ctx() ctx: IContext
    ): Promise<User | null> {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error("Email address not registered");
        }

        const checkPassword = await argon2.verify(user.password, password);

        if (!checkPassword) {
            throw new Error("Incorrect password");
        }

        if (!user.verified) {
            throw new Error("Email address not verified");
        }

        ctx.req.session.userId = user.id;
        ctx.req.session.isAdmin = user.isAdmin;

        return user;
    }

    // LOG OUT
    @Mutation(() => Boolean)
    async Logout(@Ctx() { req, res }: IContext) {
        return new Promise((resolve) =>
            req.session.destroy((err: Errback) => {
                res.clearCookie("sid");
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            })
        );
    }
}
