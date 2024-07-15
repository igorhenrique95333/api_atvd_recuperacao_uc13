import { Router } from 'express';
import { create } from '../controllers/MesaController.js';

const router = Router();

router.post('/mesa/add', create);

export default router;
