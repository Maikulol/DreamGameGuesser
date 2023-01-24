// Back end server gets configured in app.js
const app = require("./src/app");

// Creates the backend server. Sets it to port 8080 
const server = app.listen(process.env.PORT || 8080, () => {
    console.log("Connected and listening on port " + server.address().port);
})