import { Router } from "express";
import { callRequest } from "../controller/user.controller.js";

const router = Router();

router.route('/call').post(callRequest)

export default router