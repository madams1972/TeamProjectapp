const router = require('express').Router();
const userRoutes = require('./userRoutes');
<<<<<<< HEAD

router.use('/users', userRoutes);
=======
const gameRoutes = require('./gameRoutes');

router.use('/users', userRoutes);
router.use('/game', gameRoutes);
>>>>>>> 89fabfd5f8e3b63335f95df74c0980a223b5e1e8

module.exports = router;
