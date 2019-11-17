const router = require('express').Router();

const bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router');
const dinerRouter = require('../diner/diner-router');
const restaurantRouter = require('../restaurants/restaurant-router');

router.use('/auth', authRouter);
router.use('/diner', dinerRouter);
router.use('/restaurant', restaurantRouter);

router.get('/', (req, res) => {
    res.json({ api: "Running"});
});

router.post('/hash', (req, res) => {
    const password = req.body.password;
    const hash = bcrypt.hashSync(password, 12);
    res.status(200).json({ password, hash })
});

module.exports = router;

