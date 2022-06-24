const { user } = require('../models');
const { decryptPassword } = require('../helpers/bcrypt');
const { tokenGen, tokenVerifier } = require('../helpers/jsonwebtoken');

class UserController {
    static async list(req, res) {
        try {
            let users = await user.findAll();

            res.status(200).json(users);
        } catch(err) {
            res.status(404).json({
                message: `Not Found`
            })
        }
    }

    static async register(req, res) {
        try {
            const { nama, email, username, password } = req.body;

            console.log("req", req.body)

            let result = await user.create({
                nama, email, username, password
            })
            res.status(200).json(result)
        } catch (err) {
            console.log("ERROR ",err.message)
            res.status(404).json({
                message: `Register has Failed!`
            })
        }
    }

    static async login(req, res) {
        try {
            const {email, password} = req.body;
            let emailFound = await user.findOne({
                where: {email}
            })
            if (emailFound) {
                if(decryptPassword(password, emailFound.password)) {
                    let access_token = tokenGen(emailFound);
                    res.status(200).json( {access_token} );

                    let verToken = tokenVerifier(access_token);
                    console.log(verToken);
                } else {
                    res.status(404).json({
                        message: `Wrong Data!`
                    })
                }
            }
        } catch (err) {
            res.status(404).json({
                message: `Error 404 : User Not Found!`
            })
        }
    }
    
    static async update(req, res) {
        const id = +req.userData.id;
        const { nama, email, username, password, image } = req.body;

        try {
            let result = await user.update({
                nama, email, username, password, image
            }, {
                where: { id }
            });

            result[0] === 1 ?
                res.status(200).json({
                    message: `id ${id} has been updated..`
                })
                :
                res.status(404).json({
                    message: `id ${id} Not Found!`
                })
        } catch (err) {
            res.status(404).json({
                message: `Update data failed!`
            })
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await user.destroy({
                where: { id }
            });

            result === 1 ?
                res.status(200).json({
                    message: `id: ${id} has successful removed..`
                }) :
                res.status(404).json({
                    message: `id: ${id} has not success to removed..`
                })
        } catch (err) {
            res.status(404).json({
                message: `Not Found`
            })
        }
    }

    static async detailUser(req, res) {
        try {
            const id = +req.userData.id;
            let result = await user.findByPk(id);

            result !== null ?
                res.status(200).json(result)
                :
                res.status(404).json({
                    message: `User not Found`
                })
        } catch (err) {
            res.status(404).json({
                message: `Failed!`
            })
        }
    }
}

module.exports = UserController;