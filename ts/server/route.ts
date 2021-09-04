/**
 * root.ts
 * 
 * A default router, mostly used to serve a greeting message.
 */

import * as express from "express";
import * as controller from "./controller";

const router = express.Router();

router.get(
    "/hello",
    controller.hello
);

export default router;