const express = require("express");
const { handleGenerateShortId } = require("../controllers/url");

const urlRouter = express.Router();

urlRouter.post("/", handleGenerateShortId);

module.exports = urlRouter;
