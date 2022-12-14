const UserModel = require('../../models/user.db');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    try {
        const users = await UserModel.find({_id: {$ne: id}}).select("-password -__v").lean();
        return res.json({users: users})
    } catch (error) {
        next(error)
    }
    
};

