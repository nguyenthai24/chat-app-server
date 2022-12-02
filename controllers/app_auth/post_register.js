const UserModel = require('../../models/user.db');
const brcypt = require('bcrypt')


module.exports = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const [usernameCheck, emailCheck] = await Promise.all([
            UserModel.findOne({ username: username }),
            UserModel.findOne({ email: email }),
        ]);
    
        if (usernameCheck)
            return res.json({
                status: false,
                msg: 'Username already used',
            });
        if(emailCheck) {
            return res.json({
                status: false,
                msg: 'Email already used'
            })
        }
    
        const hashedPassword = await brcypt.hash(password, 10);
        const user = await UserModel.create({
            email,
            username,
            password: hashedPassword,
        });
        
        delete user.password;
        
        return res.json({status: true, user})
    } catch (error) {
        next(error)
    }
};
