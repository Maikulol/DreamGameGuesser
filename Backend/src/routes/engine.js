// Imports express router
const router = require("express").Router();

// Imports custom router for engine route
const engine = require("../controllers/engine")

// Calls the function to process the user inputs
router.get("/", engine.computeResult)

const gamesRouter = router;
module.exports = gamesRouter;