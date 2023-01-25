// App is for the configuration of the backend server

// Import express library
const express = require("express");

// Creates "app"
const app = express();

// Imports cors "Cross-Origin Resource Sharing"
const cors = require("cors");

// Imports routes for the backend api
const router = require("./routes/router");

// Serve react app on server
app.use(express.static("../../Frontend/build"))

// Parsing request body and enabling cors
// Default options
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Configure routes
app.use("/", router);

// 404 error (If no requests made are able to be satisified by the router, will show this error.)
app.use((req, res, next) => {
    next(new Error("not found", 404));
});

// Error handling
app.use((err, req, res, next) => {
    res.status(err.code || 500);
    console.log(err);
    res.send(err.message);
});


// Exports the app
module.exports = app;