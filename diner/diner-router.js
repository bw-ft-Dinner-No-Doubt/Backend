const router = require('express').Router();

const Diner = require('./diner-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, checkRole('diner', 'admin'), (req, res) => {
    Diner.find()
    .then(diner => {
        res.json(diner);
    })
    .catch(err => res.send(err));
});

module.exports = router;

//check role
function checkRole(roles){
    return function (req, res, next){
        if(roles.includes(req.decodedJwt.role)){
            next();
        } else {
            res.status(403).json({ message: "You do not have the correct role for access"})
        }
    }
}