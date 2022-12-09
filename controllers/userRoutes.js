const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard');
  });
  
  router.get('/login', (req, res) => {
    res.render('login');
  });

 router.get('/game', (req, res) => {
    res.render('game');
  });

  router.get('/newuser', (req, res) => {
    res.render('passwordreset');
  });

  module.exports = router;