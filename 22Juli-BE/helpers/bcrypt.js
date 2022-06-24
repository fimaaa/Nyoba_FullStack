const bcrypt = require('bcrypt');
const saltRound = +process.env.SALT_ROUND || 5;

const encryptPassword = (password) => {
    return bcrypt.hashSync(String(password), saltRound);
};

const decryptPassword = (password, hashPass) => {
    return bcrypt.compareSync(String(password), hashPass);
};

module.exports = {
    encryptPassword, decryptPassword
};