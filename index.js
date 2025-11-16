const express = require("express");
const connectMongoDB = require("./connect");
const urlRouter = require("./routes/url");
const URL = require("./models/url");

// Global Variables
const app = express();
const PORT = 8001;
const dbUrl = "mongodb://localhost:27017";
const dbName = "short-url";

// Connect to Database
connectMongoDB(dbUrl, dbName)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => `Cannot connect to DB. Error: ${error}`);

// to parse req body (json)
app.use(express.json());

app.use("/url", urlRouter);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  return res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
