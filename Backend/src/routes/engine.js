const router = require("express").Router();
const engine = require("../controllers/engine")

router.get("/", engine.computeResult)

const gamesRouter = router;
module.exports = gamesRouter;