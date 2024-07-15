import { Router } from 'express';
import {create} from '../controllers/ReservaController.js';
import {encontrarMesa} from '../controllers/ReservaController.js';
import { encontrarDisponiblidade } from '../controllers/ReservaController.js'
import {encontrarMesasData} from '../controllers/ReservaController.js'
import { DeleteDisponiblidade } from '../controllers/ReservaController.js';
import{encontrarDisponiblidadedate,encontrarDisp} from '../controllers/ReservaController.js';

const router = Router();

router.post('/res/add', create);
router.get('/mesa', encontrarMesa);
router.get('/disp/:mesaId', encontrarDisponiblidade);
router.get('/mesa/data', encontrarMesasData);
router.get('/getdisp/:date', encontrarDisponiblidadedate);
router.get('/disp', encontrarDisp);
router.delete('/deldisp', DeleteDisponiblidade);
// router.get('/res/list', getList);
// router.get('/ad/:id', getItem);
// Enviando imagens, será POST
// router.post('/ad/:id', authPrivate, update);

export default router;