const { Router } = require("express");

const items = require("./items");

const router = Router();

router.use("/notes", items);

module.exports = router;
