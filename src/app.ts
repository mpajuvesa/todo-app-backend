import * as express from 'express';
const app = express();

import * as bodyParser from 'body-parser';

import { Routes } from './router';

import { get } from 'lodash';

const configFile = require('../config/config.json');
const PORT = 4300;

const stage = process.env.STAGE || 'development';
const config = get(configFile, stage);

process.env.DATABASE_CONFIG = JSON.stringify(config);

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
