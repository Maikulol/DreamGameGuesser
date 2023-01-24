// Imports express router
const router = require("express").Router();

// Imports custom router for games route
const games = require("../controllers/games")

// Calls the function to get all games
router.get("/", games.getGames)

const gamesRouter = router;
module.exports = gamesRouter;