import { Router } from "express";
import { createUserSessionHandler } from "../controller/session.controller";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schema/session.schema";

const router = Router()

router.use('/', validateResource(createSessionSchema) ,createUserSessionHandler)

export default router