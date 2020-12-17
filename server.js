const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

//BodyParser Middleware
app.use(cors());
app.use(express.json());

//Local mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/shoppingList", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established..!");
});

//Use Routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port: ${port}`));
