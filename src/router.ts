import { Router } from 'express';
const router = Router();

import { Task } from './interfaces/Task';

router.get('/', (req, res) => {
  res.end('/');
});

export const Routes = router;
