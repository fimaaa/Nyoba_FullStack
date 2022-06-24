const jwtoken = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || 'rahasia';

const tokenGen = (data) => {
    const { id, nama, email, username, image } = data;
    return jwtoken.sign({
        id, nama, email, username, image
    }, secretKey)
};
const tokenVerifier = (token) => {
    return jwtoken.verify(token, secretKey)
};

module.exports = {
    tokenGen, tokenVerifier
};