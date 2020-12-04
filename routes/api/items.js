const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Item");

//@route   GET app/items
//@desc    get all items
//@access  public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//@route   POST app/items
//@desc    create a Post request
//@access  public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

module.exports = router;
