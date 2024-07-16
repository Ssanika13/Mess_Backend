const Membership = require('../Models/MembershipModel'); // Adjust the path as needed

// Create a new membership
const createMembership = async (req, res) => {
    try {
        const newMembership = new Membership(req.body);
        await newMembership.save();
        res.status(201).json(newMembership);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all memberships
const getMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.status(200).json(memberships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single membership by ID
const getMembershipById = async (req, res) => {
    try {
        const membership = await Membership.findById(req.params.id);
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.status(200).json(membership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a membership by ID
const updateMembership = async (req, res) => {
    try {
        const updatedMembership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedMembership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.status(200).json(updatedMembership);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a membership by ID
const deleteMembership = async (req, res) => {
    try {
        const deletedMembership = await Membership.findByIdAndDelete(req.params.id);
        if (!deletedMembership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.status(200).json({ message: 'Membership deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createMembership,
    getMemberships,
    getMembershipById,
    updateMembership,
    deleteMembership
};
