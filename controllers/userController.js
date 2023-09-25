const User = require('../model/user')

const getAllUsers = async (req, res) => {
    const users = await User.find().select('name surname');

    res.json({
        status: 'success',
        results: users.length,
        users
    });
};

const getOneUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({
        user
    });
};

const createUser = async (req, res) => {
    const user = await User.save();

    res.json({
        user
    });
};




const updateUser = async (req, res) => {
    const userId = req.params.id;

    const user = await user.findByIdAndUpdate(userId);
    res.json({
        user
    });
};

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await user.deleteOne({
        id: userId
    });
    res.json({});
};

module.exports = {
    GetAllUsers: getAllUsers,
    updateUser,
    deleteUser,
    GetOneUserById: getOneUserById,
    createUser

}