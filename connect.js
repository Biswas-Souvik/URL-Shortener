const mongoose = require("mongoose");

async function connectMongoDB(dbUrl, dbName) {
  const uri = `${dbUrl}/${dbName}`;
  return mongoose.connect(uri);
}

module.exports = connectMongoDB;
