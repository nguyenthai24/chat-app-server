const ErrorLogger = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

const ErrorResponder = (error, req, res, next) => {
    res.header('Content-Type', 'application/json');
    const statusCode = error.statusCode || 400;
    res.status(statusCode).send({msg: error.message, status: error.status});
};

const InvalidPathHandler = (req, res, next) => {
    res.status(404);
    res.send('Route does not exist');
};

module.exports = { ErrorLogger, ErrorResponder, InvalidPathHandler };
