const { v4: uuidv4 } = require('uuid');

const { readDataFromFile, writeDataToFile } = require('../utils/filereadwrite');

const getItems = (req, res) => {
  // get all items from files
  const items = readDataFromFile('items');
  //send all items as a response

  return res.json(items);
};

const deleteItem = (req, res) => {
  // get id from req
  const { noteId } = req.params;

  // get all items from file
  const { items } = readDataFromFile('items');

  // remove item from file
  const filteredItems = items.filter((item) => item.id !== noteId);

  writeDataToFile('items', { items: filteredItems });

  // send response
  return res.json({
    message: 'Successfully deleted shopping item',
  });
};

const createItem = (req, res) => {
  // get the payload from the req body

  const { title, text } = req.body;

  //create uuid
  const id = uuidv4();

  // create the item object

  const item = {
    id,
    title,
    text,
  };

  // get all from items from file
  const data = readDataFromFile('items');

  //push new items to item

  data.push(item);

  //write all items to file

  writeDataToFile('items', data);

  // send a response

  return res.json({
    message: 'succesfully created new notes',
  });
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
};
