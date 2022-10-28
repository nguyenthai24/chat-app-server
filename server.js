const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const app = express();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
