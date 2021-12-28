const Mongoose = require("mongoose");

const RecordSchema = new Mongoose.Schema({

    key : String,
    createdAt : Date,
    counts : Array,
    value :String,
})

module.exports = Mongoose.model("record",RecordSchema)
