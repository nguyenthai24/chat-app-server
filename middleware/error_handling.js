const ErrorLogger = (error, req, res, next) => {
    console.error(err.stack);
    next(error);
};

const ErrorResponder = (error, req, res, next) => {
    res.header('Content-Type', 'application/json');

    const status = error.status || 400;
    res.status(status).send(error.message);
};

const InvalidPathHandler = (req, res, next) => {
    res.status(400);
    res.send('invalid path');
};

module.exports = { ErrorLogger, ErrorResponder, InvalidPathHandler };
