const express = require('express');
const router = express.Router();
const profileController = require('../Controllres/ProfileController'); // Adjust the path as needed

// Create a new profile
router.post('/profile', profileController.createProfile);

// Get all profiles
router.get('/profile', profileController.getAllProfiles);

// Get a single profile by ID
router.get('/profile/:id', profileController.getProfileById);

// Update a profile by ID
router.patch('/profile/:id', profileController.updateProfileById);

// Delete a profile by ID
router.delete('/profile/:id', profileController.deleteProfileById);

module.exports = router;
