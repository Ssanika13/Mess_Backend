const express = require('express');
const membershipController = require('../Controllres/MembershipListController'); // Adjust the path to your controller

const router = express.Router();

// Route to create a new membership
router.post('/membership/create', membershipController.createMembership);

// Route to get all memberships
router.get('/membership/all', membershipController.getAllMemberships);

// Route to get a membership by ID
router.get('/membership:id', membershipController.getMembershipById);

// Route to update a membership by ID
router.patch('/membership:id', membershipController.updateMembership);

// Route to delete a membership by ID
router.delete('/membership:id', membershipController.deleteMembership);

module.exports = router;
