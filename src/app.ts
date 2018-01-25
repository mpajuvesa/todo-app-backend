import * as express from 'express';
const app = express();

import * as bodyParser from 'body-parser';

import { Routes } from './router';

const PORT = 4300;
const config = require('../config/dev.json');
process.env.DATABASE_CONFIG = JSON.stringify(config.db);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Authorization");
  next();
});

app.use(bodyParser.json());

app.use(Routes);

app.listen(PORT, () => {
  console.log(`Servers started at port ${PORT}`);
});
