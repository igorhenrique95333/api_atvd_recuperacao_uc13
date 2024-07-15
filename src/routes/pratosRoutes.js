import { Router } from 'express';
import { create, encontrarPratos } from '../controllers/PratosController.js';

const router = Router();

router.get('/prato', encontrarPratos);
router.post('/prato/add', create);
export default router;
