
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers.authorization; // send token in header

    if(token){
        const secret = process.env.JWT_SECRET || 'not all secrets are the same';
        //check that token is valid and un modified
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                
                res.status(403).json({ message: 'Please login'});
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(400).json({ message: "No credentials provided"});
    }
};

