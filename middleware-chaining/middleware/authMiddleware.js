const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
    console.log("Auth Middleware");

    next()
}

module.exports = auth