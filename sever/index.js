const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
app.use(express.json());
const port = 3001;
app.use(cors());
app.use(express.json());
const URI = "mongodb+srv://asirreshmi0103:asir0103@cluster0.ivhu6sq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
