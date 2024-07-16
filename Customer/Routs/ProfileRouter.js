const express = require('express');
const profileController = require('../Controllers/ProfileController'); // Adjust the path to your controller
const mongoose = require('mongoose');

const router = express.Router();

// Validate ID middleware
router.param('id', (req, res, next, id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    next();
});

// Routes
router.post('/cprofile', profileController.createProfile);
router.get('/cprofile', profileController.getProfiles);
router.get('/cprofile:id', profileController.getProfileById);
router.patch('/cprofile:id', profileController.updateProfile);
router.delete('/cprofile:id', profileController.deleteProfile);

module.exports = router;
