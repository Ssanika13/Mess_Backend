const express = require('express');
const router = express.Router();
const paymentController = require('../Controllres/PaymentController'); // Adjust the path as needed

// Create a new profile
router.post('/payment', paymentController.createPayment);

// Get all profiles
router.get('/payment', paymentController.getAllPayments);

// Get a single profile by ID
router.get('/payment/:id', paymentController.getPaymentById);

// Update a profile by ID
router.patch('/payment/:id',paymentController.updatePaymentById);

// Delete a profile by ID
router.delete('/payment/:id',paymentController.deletePaymentById);

module.exports = router;
