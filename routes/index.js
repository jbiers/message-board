import express from 'express';

import { messages } from '../models/messages.js';
import { dateToReadableFormat } from '../utils/dateToReadableFormat.js';

export const indexRouter = express.Router();

messages.forEach(message => {
  message.creationDate = dateToReadableFormat(message.creationDate);
});

/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages });
});
