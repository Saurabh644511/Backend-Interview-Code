const userService = require("../services/userService");

const getUsers = async(req,res)=>{
    try {
        const users = await userService.getUsers();

        res.json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
} 

const getSingleUser = async(req, res) => {
    try {
        const user = await userService.getSingleUser(req.params.id)

        res.json(user)
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await userService.createNewUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const updateUser = async (req, res)=>{
    try {
        const user = await userService.updateExistingUser(req.params.id, req.body)
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userService.removeUser(req.params.id);
        res.status(200).json({
            message:"User deleted successfully"
        });
    } catch (error) {
         res.status(500).json({
            message: error.message,
        })
    }
}
module.exports = {getUsers, createUser, getSingleUser, updateUser ,deleteUser}