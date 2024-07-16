const express = require('express');
const membershipController = require('../Controllers/MembershipController'); // Adjust the path as needed

const router = express.Router();

router.post('/cmembership', membershipController.createMembership);
router.get('/cmembership', membershipController.getMemberships);
router.get('/cmembership:id', membershipController.getMembershipById);
router.patch('/cmembership:id', membershipController.updateMembership);
router.delete('/cmembership:id', membershipController.deleteMembership);

module.exports = router;
