import { Router } from 'express';
import {create} from '../controllers/ReservaController.js';
import {encontrarMesa} from '../controllers/ReservaController.js';
import { encontrarDisponiblidade } from '../controllers/ReservaController.js'
import {encontrarMesasData} from '../controllers/ReservaController.js'
import { DeleteDisponiblidade, update} from '../controllers/ReservaController.js';
import{encontrarDisponiblidadedate,encontrarDisp,encontrarReservaData, DeleteReserva} from '../controllers/ReservaController.js';
import {encontrarReservaDataId} from '../controllers/ReservaController.js';

const router = Router();

router.post('/res/add', create);
router.get('/res/:date/:id', encontrarReservaDataId);
router.get('/res/:date', encontrarReservaData);
router.delete('/res/del', DeleteReserva);
router.put('/res/:id', update);

router.get('/mesa', encontrarMesa);
router.get('/disp/:mesaId', encontrarDisponiblidade);
router.get('/mesa/data', encontrarMesasData);
router.get('/getdisp/:date', encontrarDisponiblidadedate);
router.get('/disp', encontrarDisp);
router.delete('/deldisp', DeleteDisponiblidade);


export default router;