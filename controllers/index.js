const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');

router.use('/api', apiRoutes);
router.use('/', userRoutes);

module.exports = router;