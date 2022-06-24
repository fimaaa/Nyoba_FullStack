const { tokenVerifier } = require('../helpers/jsonwebtoken');

const authentication = (req, res, next) => {
    const access_token = req.headers.access_token;

    if (access_token) {
        try {
            let userData = tokenVerifier(access_token);
            req.userData = userData;
            next();
        } catch(err) {
            console.log(err);
            res.status(403).json({
                message: `Token is invalid`
            })
        }
    } else {
        res.status(404).json({
            message: `404 : Access Token Not Found`
        })
    }

    // next();
};

module.exports = { authentication };