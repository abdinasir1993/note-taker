const { v4: uuidv4 } = require("uuid");

const { readDataFromFile, writeDataToFile } = require("../utils/filereadwrite");

const getItems = (req, res) => {
  // get all items from files
  const items = readDataFromFile("items");
  //send all items as a response

  return res.json(items);
};

createItem = (req, res) => {
  // get the payload from the req body

  const { name } = req.body;

  //create uuid

  const id = uuidv4();

  // create the item object

  const item = {
    id,
    name,
  };

  // get all from items from file
  const data = readDataFromFile("item");

  //push new items to item

  data.items.push(item);

  //write all items to file

  writeDataToFile("items", data);

  // send a response

  return res.json({
    message: "succesfully created new notes",
  });
};

module.exports = {
  getItems,
  createItem,
};
