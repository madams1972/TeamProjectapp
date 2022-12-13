const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/newuser', (req, res) => {
    res.render('newuser');
  });

  module.exports = router;