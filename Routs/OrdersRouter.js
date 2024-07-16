const express = require('express');
const OrdersController = require('../Controllres/OrdersController'); // Adjust the path to your controller

const router = express.Router();

router.post('/orders', OrdersController.createOrderItem);
router.get('/orders', OrdersController.getAllOrderItems);
router.get('/orders/:id', OrdersController.getOrderItemById);
router.patch('/orders/:id', OrdersController.updateOrderItem);
router.delete('/orders/:id', OrdersController.deleteOrderItem);

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = router;
