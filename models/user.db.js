const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('Users', UserSchema);
