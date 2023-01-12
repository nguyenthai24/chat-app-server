require("./services/connectMongoDB");

require('express-async-errors');
const express = require("express");
const cors = require("cors");
const http = require("http");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

app.use(cors());
app.use(express.json());
app.set("trust proxy", 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 60,
    })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static("./public"));

// router
const appRoute = require("./routes");
app.use(appRoute);

// Error handling Middleware functions
const { ErrorLogger, ErrorResponder, InvalidPathHandler } = require("./middleware/error_handling");
app.use(ErrorLogger);
app.use(ErrorResponder);
app.use(InvalidPathHandler);

/** Create HTTP server. */
const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
