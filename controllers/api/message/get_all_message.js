const MessageModel = require('../../../models/message.db');

module.exports = async (req, res, next) => {
    try {
        const {form, to} = req.body;
        const messages = await MessageModel.find({
            users: {
                $all: [from, to],
            }
        }).sort({updatedAt: 1});
        const projectMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text
            }
        });
        return  res.json(projectMessages)
    } catch (err) {
        next(err)
    }
}; 

