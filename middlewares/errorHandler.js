const notFound = (req, res, next)=> {
    const error = new Error(`Did not find: ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next)=> {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    req.statusCode;
    res.json({
        message: err?.message,
        stack: err?.stack
    });
};

module.exports = {errorHandler, notFound};

