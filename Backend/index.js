const app = require("./src/app");

const server = app.listen(process.env.PORT || 8080, () => {
    console.log("Connected and listening on port " + server.address().port);
})