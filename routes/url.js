const express = require("express");
const {
  handleGenerateShortId,
  handleGetAnalytics,
} = require("../controllers/url");

const urlRouter = express.Router();

urlRouter.post("/", handleGenerateShortId);
urlRouter.get("/analytics/:shortId", handleGetAnalytics);

module.exports = urlRouter;
