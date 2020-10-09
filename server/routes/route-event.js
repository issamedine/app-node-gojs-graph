const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

//@route POST /register
//@desc  Register data
//@access Public
router.post("/api", listController.listData);

module.exports = router;