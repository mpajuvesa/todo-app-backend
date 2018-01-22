import { Router } from 'express';
const router = Router();

import { User } from '../Database/Sequelize/Models/User';


router.get('/', async (req, res) => {
  const user = new User();
  const created = await user.add({ username: 'test', password: 'lol' });
  console.log(created)
});

router.get('/:id', async (req, res) => {
  const user = new User();
  const id = req.params.id;
  const found = await user.find(id);
  console.log(found)
});

export const Routes = router;
