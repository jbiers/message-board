import express from 'express';

import { messages } from '../models/messages.js';

export const formRouter = express.Router();

/* GET form page. */
formRouter.get('/', function(req, res, next) {
  res.render('form', { title: 'New message' });
});


/* POST form page. */
formRouter.post('/', function(req, res, next) {
    messages.push({
        messageText: req.body.messageText,
        username: req.body.username,
        creationDate: new Date(),
    })

    res.redirect('/');
  });
  
