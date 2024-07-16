const express = require('express');
const itemsController = require('../Controllers/ItemsController'); // Adjust the path as needed

const router = express.Router();

router.post('/citems', itemsController.createItem);
router.get('/citems', itemsController.getItems);
router.get('/citems:id', itemsController.getItemById);
router.patch('/citems:id', itemsController.updateItem);
router.delete('/citems:id', itemsController.deleteItem);

module.exports = router;
