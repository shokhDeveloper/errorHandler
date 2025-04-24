class ClientError extends Error{
    constructor(message, status){
        super(message);
        this.message = `ClientError: ${message} !`;
        this.status = status;
    }
}
class ServerError extends Error{
    constructor(message){
        super(message);
        this.message = `ServerError: ${message} !`;
        this.status = 500;
    }
}

const globalError = (err, res) => {
    let error = {
        message: err.message,
        status: err.status || 500
    };
    return res.status(error.status).json(error);
}
module.exports = {ClientError, globalError, ServerError}