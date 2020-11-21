const express = require('express')
const router = express();
const cors = require("cors");
const bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(express.Router())
router.use(cors())

const {
  createHistory,
  updateHistory,
  deleteHistory,
  getHistory,
  getHistoryDetail
} = require("./controller.js");

router.post("/", createHistory)
router.post("/detail", getHistoryDetail)
router.get("/uid_user=:uid_user", getHistory)
router.patch("/", updateHistory)
router.delete("/", deleteHistory)
module.exports = router;