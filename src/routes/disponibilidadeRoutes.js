import { Router } from "express";
import { create, update } from "../controllers/DisponiblidadeController.js";

const router = Router();

router.post('/disp/add', create);
router.put('/disp/:id', update);

export default router;