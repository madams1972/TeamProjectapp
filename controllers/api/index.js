const router = require('express').Router();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);

const gameRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/game', gameRoutes);


module.exports = router;
