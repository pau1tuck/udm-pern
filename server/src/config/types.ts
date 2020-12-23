import { Request, Response } from "express";

export type IContext = {
    req: Request & { session: any };
    res: Response;
    payload?: { userId: string };
};
