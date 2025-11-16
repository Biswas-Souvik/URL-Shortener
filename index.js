const express = require("express");
const connectMongoDB = require("./connect");
const urlRouter = require("./routes/url");

const app = express();
const PORT = 8001;
const dbUrl = "mongodb://localhost:27017";
const dbName = "short-url";

connectMongoDB(dbUrl, dbName)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => `Cannot connect to DB. Error: ${error}`);

app.use(express.json());

app.use("/url", urlRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
