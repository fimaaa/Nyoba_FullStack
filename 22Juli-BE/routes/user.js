const userRoute = require('express').Router();
const { UserController } = require('../controllers')
const { authentication } = require('../middlewares/authentication')

userRoute.get('/', UserController.list);
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.put('/edit/', authentication, UserController.update);
userRoute.get('/details/:id', authentication, UserController.detailUser);
userRoute.delete('/:id', UserController.delete);

module.exports = userRoute;