import { Router } from 'express';
const router = Router();

import { User } from '../Models/Sequelize';


// router.get('/', async (req, res) => {
//   const user = new User();
//   const created = await user.add({ username: 'test', password: 'lol' });
// });

router.post('/', async (req, res) => {
  const user = new User();
  const body = req.body;

  const created = await user.add(body);
  res.json(created);
});

router.get('/:id', async (req, res) => {
  const user = new User();
  const id = req.params.id;

  const found = await user.find(id);
  res.json(found);
});

export const Routes = router;
