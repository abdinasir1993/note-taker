const { Router } = require('express');

const { getItems, createItem, deleteItem } = require('../controllers/items');

const router = Router();

router.get('/', getItems);

router.post('/', createItem);

router.delete('/noteId', deleteItem);

module.exports = router;
