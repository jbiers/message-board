import express from 'express';

import { dateToReadableFormat } from '../utils/dateToReadableFormat.js';
import { getMessages } from '../services/message.js';

export const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', async function(req, res, next) {
  const messages = await getMessages();
  
  messages.forEach(message => {
    message.creationDate = dateToReadableFormat(message.creationDate);
  });

  res.render('index', { title: 'Messages', messages });
});
