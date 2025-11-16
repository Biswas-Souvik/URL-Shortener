const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateShortId(req, res) {
  const body = req.body;
  if (!body || !body.url)
    return res.status(400).json({ error: "URL is required" });

  const shortId = shortid.generate();
  await URL.create({
    shortId,
    redirectUrl: body.url,
  });

  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateShortId,
};
