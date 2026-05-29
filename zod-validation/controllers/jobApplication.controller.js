const createApplication = async (req, res)=> {
    try {
        const application = req.body

        res.status(201).json({
            success :true,
            data: application
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = createApplication