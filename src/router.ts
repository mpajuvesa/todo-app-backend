import { Router } from 'express';
const router = Router();

import { Routes as UserController } from './Controllers/UserController';
import { Routes as TaskController } from './Controllers/TaskController';

router.get('/', (req, res) => {
  res.end('/');
});

router.use('/users', UserController);
router.use('/tasks', TaskController);

export const Routes = router;
