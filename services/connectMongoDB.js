const mongoose = require('mongoose');

module.exports = connectMongo = (async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chat-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        console.log('Connect mongoose successfully');
    } catch (error) {
        console.log(error.message);
    }
})();
