import express from 'express';

import { createMessage } from '../services/message.js';

export const formRouter = express.Router();

/* GET form page. */
formRouter.get('/', function(req, res, next) {
  res.render('form', { title: 'New message' });
});


/* POST form page. */
formRouter.post('/', async function(req, res, next) {
    const currentDate = new Date();
    await createMessage({
      messageText: req.body.messageText,
      username: req.body.username,
      creationDate: currentDate.toISOString(),
    });


    res.redirect('/');
  });
  
