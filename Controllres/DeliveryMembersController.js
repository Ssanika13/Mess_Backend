const DeliveryMember = require('../Models/DeliveryMemberModel'); // Adjust the path as needed

// Create a new delivery member
exports.createDeliveryMember = async (req, res) => {
    try {
        const deliveryMember = new DeliveryMember(req.body);
        await deliveryMember.save();
        res.status(201).json(deliveryMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all delivery members
exports.getAllDeliveryMembers = async (req, res) => {
    try {
        const deliveryMembers = await DeliveryMember.find();
        res.status(200).json(deliveryMembers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single delivery member by ID
exports.getDeliveryMemberById = async (req, res) => {
    try {
        const deliveryMember = await DeliveryMember.findById(req.params.id);
        if (!deliveryMember) {
            return res.status(404).json({ error: 'Delivery member not found' });
        }
        res.status(200).json(deliveryMember);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a delivery member by ID
exports.updateDeliveryMemberById = async (req, res) => {
    try {
        const deliveryMember = await DeliveryMember.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!deliveryMember) {
            return res.status(404).json({ error: 'Delivery member not found' });
        }
        res.status(200).json(deliveryMember);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a delivery member by ID
exports.deleteDeliveryMemberById = async (req, res) => {
    try {
        const deliveryMember = await DeliveryMember.findByIdAndDelete(req.params.id);
        if (!deliveryMember) {
            return res.status(404).json({ error: 'Delivery member not found' });
        }
        res.status(200).json({ message: 'Delivery member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
