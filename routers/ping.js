const express = require("express");
const router = express.Router();

router.get("/ping", async (req, res) => {
	res.send("pong");
});

module.exports = router;
