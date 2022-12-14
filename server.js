require('./services/connectMongoDB');

const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

app.use(cors());
app.use(express.json());

// router
const appRoute = require('./routes');
app.use(appRoute);

const server = http.createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
