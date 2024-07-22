import { Router } from 'express';
import { create, encontrarPratos, encontrarPratosByClass, updatePratos, DeletePrato} from '../controllers/PratosController.js';

const router = Router();

router.get('/prato', encontrarPratos);
router.post('/prato/add', create);
router.get('/prato/:class', encontrarPratosByClass);
router.put('/prato/update/:id', updatePratos);
router.delete('/prato', DeletePrato);
export default router;
