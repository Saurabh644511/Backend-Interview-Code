const userRepository = require("../repositories/userRepository")

class UserService {
    async getUsers(){
        return await userRepository.getAllUsers()
        
    }

    async getSingleUser(id){
        const user = await userRepository.getUserById(id);

        if(!user){
            throw new Error("User not found")
        }

        return user;
    }

    async createNewUser(data){
        return await userRepository.createUser(data);
    }

    async updateExistingUser(id, data){
        return await userRepository.updateUser(id, data)
    }

    async removeUser(id){
        return await userRepository.deleteUser(id)
    }
}

module.exports = new UserService();