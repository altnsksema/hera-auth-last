const GetAllUsers = async (req, res) => {
    const user = await user.find();
    res.json({
        user
    });
};

const GetOneUserById = async (req, res) => {
    const userId = req.params.id;
    const user = await NodeIterator.findById(userId);
    res.json({
        user
    });
};

const createUser = async (req, res) => {
    const user = await user.save();

};

res.json({
    user
});



const updateUser = async (req, res) => {
    const userId = req.params.userId;

    const user = await user.findByIdAndUpdate(userId);
    res.json({
        user
    });
};

const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    const user = await user.deleteOne({
        id: userId
    });
    res.json({});
};

module.exports = {
    GetAllUsers,
    updateUser,
    deleteUser,
    GetOneUserById,

}