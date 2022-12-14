const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const gameRoutes = require('./gameRoute');

router.use('/', userRoutes);
// router.use('/game', gameRoutes);

module.exports = router;
