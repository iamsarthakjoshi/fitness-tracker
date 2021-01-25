import { Router } from 'express';
import pingServerHealth from './../controller/pingServerHealth';

const router = Router();

router.use('/ping', pingServerHealth);

export default router;
