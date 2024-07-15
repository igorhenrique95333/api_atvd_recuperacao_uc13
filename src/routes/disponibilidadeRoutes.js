import { Router } from "express";
import { create } from "../controllers/DisponiblidadeController.js";

const router = Router();

router.post('/disp/add', create);

export default router;