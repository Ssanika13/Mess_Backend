const Order = require('../Models/OrdersModel'); // Adjust the path to your model

const validateOrderFields = (orderFields) => {
    const { orderDate, items, total, deliveryAddress, status, payment } = orderFields;

    if (!orderDate || !Array.isArray(items) || items.length === 0 || typeof total !== 'number' || !deliveryAddress || !status || typeof payment !== 'number') {
        return false;
    }
    return true;
};

exports.createOrderItem = async (req, res, next) => {
    try {
        const orderFields = req.body;

        if (!validateOrderFields(orderFields)) {
            return res.status(400).json({ message: 'All fields are required and must be valid.' });
        }

        const newOrder = new Order(orderFields);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        next(error);
    }
};

exports.getAllOrderItems = async (req, res, next) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

exports.getOrderItemById = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

exports.updateOrderItem = async (req, res, next) => {
    try {
        const orderFields = req.body;

        if (!validateOrderFields(orderFields)) {
            return res.status(400).json({ message: 'All fields are required and must be valid.' });
        }

        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            orderFields,
            { new: true, runValidators: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }
};
exports.deleteOrderItem = async (req, res, next) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted' });
    } catch (error) {
        next(error);
    }
};
