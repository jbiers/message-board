import express from 'express';

var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    creationDate: new Date(),
  },
  {
    text: 'Hello world',
    user: 'Charles',
    creationDate: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages });
});

export default router;
