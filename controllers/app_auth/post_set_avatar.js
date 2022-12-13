const UserModel = require('../../models/user.db');
const brcypt = require('bcrypt');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    console.log(123)
    if (!id) throw new Error('User not found');
    const { image } = req.body;

    try {
        const updateUser =  await UserModel.findOneAndUpdate({ _id: id }, { avatarImage: image, isAvatarImageSet: true });
        return res.body = {
            status: true,
            isSet: updateUser
        }
    } catch (error) {
        next(error);
    }
};
