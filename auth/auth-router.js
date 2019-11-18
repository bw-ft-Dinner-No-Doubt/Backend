const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Diner = require('../diner/diner-model');

const { validateDiner } = require('../diner/diner-helpers');

//Register
router.post('/register', (req, res) => {
    let diner =  req.body;

    // Validate data before sending to db
    const validateResult = validateDiner(diner)

    if(validateResult.isSuccessful === true){
        const hash = bcrypt.hashSync(diner.password, 12);
        diner.password = hash;

        Diner.add(diner)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(err);
        });
    } else {
        res.status(400).json({
            message: "invalid information about diner",
            errors: validateResult.errors
        })
    }
});

//Login
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Diner.findBy({ username })
    .first()
    .then(diner => {
        if(diner && bcrypt.compareSync(password, diner.password)){
            //produce token
            const token = getJwtToken(diner.username);
            //send token to client
            res.status(200).json({
                message: `Welcome ${diner.username}!`,
                token //return token
            });
        } else {
            res.status(401).json({ message: "invalid credentials"});
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//Logout
router.get('/logout', (req, res) => {
    if(req.token){
        req.token.destroy(err => {
            if(err){
                res.status(500).json({ message: "Failed to logout"})
            } else {
                res.status(200).json({ message: "You have successfully logged out"})
            }
        });
    } else {
        res.status(200).json({ message: "You have successfully logged out"})
    }
})

//JWT TOKEN
function getJwtToken(username){
    //make sure no one has modified token
    const payload = {
        username,
        role: 'diner'
    }
    const secret = process.env.JWT_SECRET || 'not all secrets are the same';
    const options = {
        //how long will token be valid?
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;

//Logout