const MessageModel = require('../../../models/message.db');

module.exports = async (req, res, next) => {
   try {
      const {from, to, message} = req.body;
      const data = await MessageModel.create({
         message: {text: message},
         users: [from, to],
         sender: from
      });
      if(data) return res.json({msg: "Message addedd successfully"});
      return  res.json({msg: "Failed to add message to the database"})
   } catch (error) {
      next(error)
   }
    
};

