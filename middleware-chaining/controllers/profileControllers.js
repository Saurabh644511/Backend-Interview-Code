const createProfile = (req, res)=> {
    console.log("Controller");
    res.status(200).json({
        success: true,
        message: "Profile created successfully"
    })
}

module.exports = createProfile