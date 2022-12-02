const UserModel = require('../../models/user.db');
const brcypt = require('bcrypt');

module.exports = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) return res.json({ status: false });

        const user = await UserModel.findOne({ username: username });
        if (!user) return res.json({ msg: 'Incorret username or password' });

        const isPasswordValid = await brcypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.json({ msg: 'Incorret username or password', status: false });
        }
        delete user.password;

        return res.json({ status: true, user });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};
