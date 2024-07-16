const express = require('express');
const employController = require('../Controllres/EmployRegistrationController'); // Adjust the path to your controller

const router = express.Router();

router.post('/employRegistration', employController.createEmployRegistration);
router.get('/employRegistration', employController.getAllEmployRegistrations);
router.get('/employRegistration:id', employController.getEmployRegistrationById);
router.patch('/employRegistration:id', employController.updateEmployRegistration);
router.delete('/employRegistration:id', employController.deleteEmployRegistration);

module.exports = router;
