const express = require('express');
const router = express.Router();
const deliveryMemberController = require('../Controllres/DeliveryMembersController'); // Adjust the path as needed

router.post('/DeliveryMembers', deliveryMemberController.createDeliveryMember);
router.get('/DeliveryMembers', deliveryMemberController.getAllDeliveryMembers);
router.get('/DeliveryMembers/:id', deliveryMemberController.getDeliveryMemberById);
router.patch('/DeliveryMembers/:id', deliveryMemberController.updateDeliveryMemberById);
router.delete('/DeliveryMembers/:id', deliveryMemberController.deleteDeliveryMemberById);

module.exports = router;
