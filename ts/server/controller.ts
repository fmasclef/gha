/**
 * hb.ts
 * 
 * This controller is called from routes defined in hb.ts. Its sole role is to
 * serve a default JSON over a 200 response code.
 */

import { RequestHandler, Request, Response } from 'express';

export const hello: RequestHandler = async (req: Request, res: Response) => {
    res.json({ status: "OK", greetings: "Hello!" })
};

export default {
  hello
};