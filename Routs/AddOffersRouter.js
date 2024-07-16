const express = require('express');
const offersController = require('../Controllres/AddOffersController'); // Adjust the path to your controller

const router = express.Router();

router.post('/offers', offersController.createOffers);
router.get('/offers', offersController.getAllOffers);
router.get('/offers/:id', offersController.getOffersById);
router.patch('/offers/:id', offersController.updateOffers);
router.delete('/offers/:id', offersController.deleteOffers);

module.exports = router;
