const DeliveryAddressModel = require('../Models/DeliveryAddressModel');
const DeliveryAddress = require('../Models/DeliveryAddressModel'); // Adjust the path to your model
//const { deliveryAddressSchema } = require('../utils/validation');
const mongoose = require('mongoose');

// Create a new delivery address
exports.createDeliveryAddress = async (req, res, next) => {
    try {
        const { error } = deliveryAddressSchema.validate(req.body);
        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ message: 'All fields are required and must be valid.', details: error.details });
        }

        const deliveryAddress = new DeliveryAddress(req.body);
        await deliveryAddress.save();
        res.status(201).json(deliveryAddress);
    } catch (error) {
        console.error('Error creating delivery address:', error);
        next(error);
    }
};

// Get all delivery addresses
exports.getAllDeliveryAddresses = async (req, res, next) => {
    try {
        const deliveryAddresses = await DeliveryAddress.find({});
        res.status(200).json(deliveryAddresses);
    } catch (error) {
        console.error('Error fetching delivery addresses:', error);
        next(error);
    }
};

// Get a delivery address by ID
exports.getDeliveryAddressById = async (req, res, next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            console.error('Invalid ID format:', req.params.id);
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const deliveryAddress = await DeliveryAddress.findById(req.params.id);
        if (!deliveryAddress) {
            console.error('Delivery address not found:', req.params.id);
            return res.status(404).json({ message: 'Delivery address not found' });
        }
        res.status(200).json(deliveryAddress);
    } catch (error) {
        console.error('Error fetching delivery address:', error);
        next(error);
    }
};

// Update a delivery address by ID
exports.updateDeliveryAddress = async (req, res, next) => {
    try {
        const deliveryAddressFields = req.body;
        console.log('Request Body:', deliveryAddressFields);

        // Validate the input fields using Joi
        const { error } = DeliveryAddressModel.validate(deliveryAddressFields);
        if (error) {
            console.error('Validation error:', error.details);
            return res.status(400).json({ message: 'All fields are required and must be valid.', details: error.details });
        }

        // Check if ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            console.error('Invalid ID format:', req.params.id);
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        // Find and update the delivery address
        const updatedDeliveryAddress = await DeliveryAddress.findByIdAndUpdate(
            req.params.id,
            deliveryAddressFields,
            { new: true, runValidators: true }
        );

        // Check if the delivery address was found
        if (!updatedDeliveryAddress) {
            console.error('Delivery address not found:', req.params.id);
            return res.status(404).json({ message: 'Delivery address not found' });
        }

        // Respond with the updated delivery address
        res.status(200).json(updatedDeliveryAddress);
    } catch (error) {
        // Handle any errors
        console.error('Error updating delivery address:', error);
        next(error);
    }
};

// Delete a delivery address by ID
exports.deleteDeliveryAddress = async (req, res, next) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            console.error('Invalid ID format:', req.params.id);
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const deliveryAddress = await DeliveryAddress.findByIdAndDelete(req.params.id);

        if (!deliveryAddress) {
            console.error('Delivery address not found:', req.params.id);
            return res.status(404).json({ message: 'Delivery address not found' });
        }

        res.status(200).json({ message: 'Delivery address deleted successfully', deliveryAddress });
    } catch (error) {
        console.error('Error deleting delivery address:', error);
        next(error);
    }
};
