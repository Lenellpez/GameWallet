import { Router } from 'express';
import { getDolar } from '../controllers/dolar.controller';

const router = Router();
router.get('/', getDolar);

export default router;
