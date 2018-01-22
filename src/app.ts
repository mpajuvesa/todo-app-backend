import * as express from 'express';
const app = express();

import { Routes } from './router';

const PORT = 4300;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Authorization");
  next();
});

app.use(Routes);

app.listen(PORT, () => {
  console.log(`Servers started at port ${PORT}`);
});
