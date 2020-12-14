const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
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
  console.log("MongoDB connection established..!");
});

//Use Routes
app.use("/api/items", items);

//Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port: ${port}`));
