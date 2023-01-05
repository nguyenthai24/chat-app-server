require('./services/connectMongoDB');

const express = require('express');
const cors = require('cors');
const http = require('http');
const logger = require('morgan');
const { Server } = require('socket.io');

const app = express();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

app.use(cors());
app.use(express.json());

// router
const appRoute = require('./routes');
app.use(appRoute);


// Socket
// const io = require('socket.io')(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         credentials: true,
//     },
// });

// global.onlineUsers = new Map();

// io.on('connection', (socket) => {
//     global.chatSocket = socket;
//     socket.on('add-user', (userId) => {
//         onlineUsers.set(userId, socket.id);
//         console.log('1', onlineUsers)
//     });

//     socket.on('send-msg', (data) => {
//         console.log(onlineUsers)
//         console.log(data)
//         const sendUserSocket = onlineUsers.get(data.to);
//         if(sendUserSocket) {
//             console.log(124, sendUserSocket)
//             console.log('data', data)
//             io.emit('msg-recieve', data.message);
//         }
//     })

// })

// Error handling Middleware functions
const { ErrorLogger, ErrorResponder, InvalidPathHandler } = require('./middleware/error_handling');
app.use(ErrorLogger);
app.use(ErrorResponder);
app.use(InvalidPathHandler);

/** Create HTTP server. */
const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
