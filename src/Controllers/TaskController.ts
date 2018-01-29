import { Router } from 'express';
const router = Router();

import { Task } from '../Models/Mongo'

let user: Task;
router.use((req, res, next) => {
  if (!user) {
    user = new Task(req.app.locals.db);
  }
  next();
});

router.post('/', async (req, res) => {
  const body = req.body;
  
  const created = await user.add(body);
  res.json(created);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const found = await user.find(id);
  res.json(found);
});

export const Routes = router;
