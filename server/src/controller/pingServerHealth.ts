import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    message: 'pong'
  });
});

export default router;
