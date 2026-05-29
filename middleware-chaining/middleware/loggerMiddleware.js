const logger = (req , res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    console.log("Logger Middleware");
    next();
}

module.exports = logger;