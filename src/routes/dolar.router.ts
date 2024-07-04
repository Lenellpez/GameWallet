import { Router } from 'express';
import {getDolarBlu} from '../controllers/dolar.controller'; 

const router = Router();
router.get('/blu', getDolarBlu); 

export default router;
