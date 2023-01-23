const router = require("express").Router();
const games = require("../controllers/games")

router.get("/", games.getGames)

const gamesRouter = router;
module.exports = gamesRouter;