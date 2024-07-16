const express = require('express');
const DeliveryAddressController = require('../Controllres/DeliveryAddressController'); // Adjust the path to your controller

const router = express.Router();


router.post('/deliveryaddress', DeliveryAddressController.createDeliveryAddress);

router.get('/deliveryaddress', DeliveryAddressController.getAllDeliveryAddresses);

router.get('/deliveryaddress/:id', DeliveryAddressController.getDeliveryAddressById);

router.patch('/deliveryaddress/:id', DeliveryAddressController.updateDeliveryAddress);

router.delete('/deliveryaddress/:id', DeliveryAddressController.deleteDeliveryAddress);

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

module.exports = router;
