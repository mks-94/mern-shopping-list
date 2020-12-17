const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

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
//@desc    create an Item
//@access  private
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

//@route   DELETE app/items/:id
//@desc    delete a item
//@access  private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) =>
      item.remove().then(() => res.json({ success: "Item deleted." }))
    )
    .catch((err) =>
      res.status(404).json({ failed: "Id is not present in db." })
    );
});

module.exports = router;
