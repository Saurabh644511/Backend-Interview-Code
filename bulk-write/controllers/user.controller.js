const User = require("../models/user.model")

const importBulkUsers = async (req, res) => {
    try {
        const users = req.body;

        if(!Array.isArray(users) || users.length === 0){
            return res.status(400).json({
                success: false,
                message: "Please provide an array of users.."
            })
        }

        const operations = users.map((user)=> ({
            updateOne: {
                filter: {
                    email: user.email,
                },
                update: {
                    $set: {
                        name: user.name,
                        age: user.age,
                    },
                },
                upsert: true,
            }
        }))

        const result = await User.bulkWrite(operations, {
            ordered: false,
        })

        res.status(200).json({
            success: true,
            result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
}

module.exports = importBulkUsers