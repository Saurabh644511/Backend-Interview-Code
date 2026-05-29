const validator = (req, res, next) => {
    const {name} = req.body;

    if(!name){
        return res.status(400).json({
            success: false,
            message: "Name is required"
        })
    }

    console.log("Validator Middleware");
    next()
}

module.exports = validator;