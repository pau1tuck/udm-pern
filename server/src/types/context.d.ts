import { Request, Response } from "express";

export interface IContext {
    req: Request & { session: any };
    res: Response;
    payload?: { userId: string };
}
