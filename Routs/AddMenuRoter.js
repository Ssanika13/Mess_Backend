const express = require('express');
const menuController = require('../Controllres/AddMenuControoler'); // Adjust the path to your controller

const router = express.Router();

router.post('/menu', menuController.createMenuItem);
router.get('/menu', menuController.getAllMenuItems);
router.get('/menu/:id', menuController.getMenuItemById);
router.patch('/menu/:id', menuController.updateMenuItem);
router.delete('/menu/:id', menuController.deleteMenuItem);

module.exports = router;