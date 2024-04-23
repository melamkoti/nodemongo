const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

const port = process.env.prot || 5000;

dotenv.config();
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO__URI)
  .then(() => {
    console.log("MongoDb connected Successfully");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use("/employees", employeeRoutes);

app.listen(port, () => {
  console.log(`server is starting and running at ${port}`);
});
