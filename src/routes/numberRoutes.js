import { Router } from 'express';
import getNumberProperties from '../controllers/numberController.js';

const router = Router();

router.get('/', getNumberProperties);

export default router;
