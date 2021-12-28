const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
    console.log("MongoDB connection is established..");
  });
  
  const connectDB = () => {
    Mongoose.connect(`mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  };
  
  module.exports = connectDB;
