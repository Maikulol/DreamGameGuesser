// Imports router from express library
const router = require("express").Router();

// Import our own custom router for the games route
const gamesRouter = require("./games");

// Route /games to our custom router
router.use("/games", gamesRouter);

module.exports = router;