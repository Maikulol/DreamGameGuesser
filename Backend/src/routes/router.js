// Imports router from express library
const router = require("express").Router();

// Import our own custom router for the games route
const gamesRouter = require("./games");

// Import our own custom router for the engine route
const engineRouter = require("./engine");

// Route /games to our custom router
router.use("/games", gamesRouter);

// Route /engine to our custom router
router.use("/engine", engineRouter);

module.exports = router;