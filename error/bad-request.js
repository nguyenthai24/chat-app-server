const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./CustomError');

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.status = false;
    }
}

module.exports = BadRequestError;
