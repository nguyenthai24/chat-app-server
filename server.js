require('./services/connectMongoDB');

const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

app.use(cors());
app.use(express.json());

// router
const appRoute = require('./routes');
app.use(appRoute);

const server = http.createServer(app);

// Socket
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
    global.chatSocket = socket;
    socket.on('add-user', (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on('send-msg', (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket) {
            socket.to(sendUserSocket).emit('msg-recieve', data.msg);
        }
    })

})

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
