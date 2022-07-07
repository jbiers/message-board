import express from 'express';

import { messages } from '../models/messages.js';

export const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages });
});
