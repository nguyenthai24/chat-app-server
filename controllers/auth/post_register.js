const UserModel = require('../../models/user.db');
const TokenMoel = require('../../models/token.db');
const {StatusCodes} = require('http-status-codes');
const {BadRequestError, UnauthenticatedError, UnauthorizedError} = require('../../error')

module.exports = async (req, res, next) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
                 throw new  BadRequestError('Field not empty');
            } 
    // try {
    //     if(!name || !email || !password) {
    //          throw new  BadRequestError('Field not empty');
    //     }  

    //     const emailAlreadyExists = await UserModel.findOne({email: email});
    // } catch (error) {
    //     next(error)
    // }
};
