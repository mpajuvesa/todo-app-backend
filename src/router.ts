import { Router } from 'express';
const router = Router();

import { Routes as UserController } from './Controllers/UserController';

router.get('/', (req, res) => {
  res.end('/');
});

router.use('/users', UserController);

export const Routes = router;
