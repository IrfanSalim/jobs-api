const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, please try again later.",
    };

    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }

    if (err.name === "ValidationError") {
        customError.statusCode = 400;
        customError.msg = Object.values(err.errors)
            .map((err) => err.message)
            .join(", ");
    }

    if (err.name === "CastError") {
        customError.statusCode = 404;
        customError.msg = `No error found for ${err.value}`;
    }

    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for the ${Object.keys(err.keyValue)} field, please choose a different value`;
        customError.statusCode = 400;
    }
    return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
