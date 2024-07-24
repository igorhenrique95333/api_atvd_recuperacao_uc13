import { Router } from 'express';
import { create, encontrarMesaId, DeleteMesa, update} from '../controllers/MesaController.js';

const router = Router();

router.post('/mesa/add', create);
router.get('/mesa/:id', encontrarMesaId);
router.delete('/mesa', DeleteMesa);
router.put('/mesa/update/:id', update);


export default router;
