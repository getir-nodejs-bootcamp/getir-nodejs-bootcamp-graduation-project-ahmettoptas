const connection = require("./src/loader/mongodb");
const recordRoutes = require("./src/routes/Record");
const errorRoutes = require("./src/routes/ErrorUrl");

const express = require("express");
const app = express();

//Server accepts only JSON body
app.use(express.json());

//Connect to mongodb
connection();


//Server accepts only /records url, otherwise it directs to error
app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
    app.use("/records",recordRoutes);
    app.use("/*",errorRoutes);

});
