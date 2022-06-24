const { tokenVerifier } = require('../helpers/jsonwebtoken');

const authorization = (req, res, next) => {
    const { CheckAccount } = req.tokenVerifier;

    if (CheckAccount === CheckAccount) {
        next();
    } else {
        res.status(403).json({
            message: `Unauthorized`
        })
    }
}

module.exports = authorization;