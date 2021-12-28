const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
    console.log("MongoDB connection is established..");
  });
  
  const connectDB = () => {
    const { DB_URI } = process.env;
    Mongoose.connect(`${DB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  };
  
  module.exports = connectDB;
