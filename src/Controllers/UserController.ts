import { Router } from 'express';
const router = Router();

import { User } from '../Models/Mongo'

let user: User;
router.use((req, res, next) => {
  if (!user) {
    user = new User(req.app.locals.db);
  }
  next();
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const created = await user.add(body);
    res.json(created);
  } catch (error) {
    const { code } = error;
    console.log(error)
    switch (code) {
      case 11000:
        res.json({ error: true, message: 'Try a different username' });
        break;
      default:
        res.json({ error: 'Unexpected error' });
        break;
    }
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const found = await user.find({ key: 'username', value: id });
    res.json(found);
  } catch (error) {
    res.json({ error });
  }
});

export const Routes = router;
