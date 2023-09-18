const jwt = require('jsonwebtoken');
//const { error } = require('errorHandler');

const auth = (req, res, next) => {
    try {
        const token = req.cookies.jwt

        //console.log(token);
        if (!token) {
            return res.status(401).json({
                message: 'No token.'
            })
        }


        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) return res.status(401).json({
                err,
                message: 'Invalid token'
            })

            req.user = decoded;
            next();
        });
    } catch {
        return next(error);
    }
}

module.exports = {
    auth,
};