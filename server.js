const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const items = require("./routes/api/items");

//BodyParser Middleware
app.use(cors());
app.use(bodyParser.json());

//Local mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/shoppingList", {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established in murali's machine.");
});

//Use Routes
app.use("/api/items", items);

app.listen(port, () => console.log(`Server started on port: ${port}`));
