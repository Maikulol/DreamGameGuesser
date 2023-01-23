const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/router");

// Default options
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Configure routes
app.use("/", router);

// 404 error
app.use((req, res, next) => {
    next(new Error("not found", 404));
});

// Error handling
app.use((err, req, res, next) => {
    res.status(err.code || 500);
    console.log(err);
    res.send(err.message);
});

module.exports = app;