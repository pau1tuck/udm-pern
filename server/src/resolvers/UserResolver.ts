/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { Resolver, Query, Mutation, Arg, UseMiddleware, Ctx } from "type-graphql";
import argon2 from "argon2";
import { User } from "../entities/User";
import { IContext } from "../types/context";
import { isAdmin } from "../utils/permissions";

@Resolver(User)
export class UserResolver {
	// USERS
	@Query(() => [ User ])
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
				password: encryptedPassword
			});
		} catch (err) {
			console.log(err);
			return false;
		}
		return true;
	}

	// LOGIN
	@Mutation(() => User, { nullable: true })
	async Login(
		@Arg("email") email: string,
		@Arg("password") password: string,
		@Ctx() ctx: IContext
	): Promise<User | null> {
		const user = await User.findOne({ where: { email } });

		if (!user) {
			throw new Error("User not registered");
		}

		const verify = await argon2.verify(user.password, password);

		if (!verify) {
			throw new Error("Incorrect password");
		}

		ctx.req.session.userId = user.id;

		return user;
	}
}
