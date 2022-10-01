const express = require("express");
const { createItem, getItem, getItems, updateItem, deleteItem } = require("../controllers/storage");
const { validatorGetItem } = require("../validators/storage");
const router = express.Router();


//put item
router.post("/",uploadMiddleware.single("myfile"),createItem);

//get list items
router.get("/",getItems)

//get an item
router.get("/:id",validatorGetItem,getItem)

//Delete item
router.delete("/:id",validatorGetItem,deleteItem)

module.exports = router; 