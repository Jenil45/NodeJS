import User from "../models/user-model";

class UserService
{
    async findUser(filter)
    {
        const user = await User.findOne({phone : filter});
        return user;
    }
    async findUserById(id)
    {
        const user = await User.findOne({_id : id});
        return user;
    }

    async createUser(data)
    {
        const user = new User({phone : data});
        const result = await user.save()
        return result;
    }
}

export default new UserService();