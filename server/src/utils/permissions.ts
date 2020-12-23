import { MiddlewareFn } from "type-graphql";
import { IContext } from "../types/context";

export const isAuthenticated: MiddlewareFn<IContext> = ({ context }, next) => {
	if (!context.req.session.userId) {
		throw new Error("User not authenticated");
	}
	return next();
};

export const isAdmin: MiddlewareFn<IContext> = ({ context }, next) => {
	if (!context.req.session.isAdmin) {
		throw new Error("User does not have admin rights");
	}
	return next();
};
