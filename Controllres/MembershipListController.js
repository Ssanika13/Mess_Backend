const MembershipList = require('../Models/MembershipListModel');

exports.createMembership = async (req, res, next) => {
    try {
        const newMembership = new MembershipList(req.body);
        const savedMembership = await newMembership.save();
        res.status(201).json(savedMembership);
    } catch (error) {
        next(error);
    }
};

exports.getAllMemberships = async (req, res, next) => {
    try {
        const memberships = await MembershipList.find({});
        res.status(200).json(memberships);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getMembershipById = async (req, res, next) => {
    try {
        const membership = await MembershipList.findById(req.params.id);
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        res.status(200).json(membership);
    } catch (error) {
        next(error);
    }
};



exports.updateMembership = async (req, res, next) => {
    try {
        // Validate request body to ensure it contains necessary fields
        const { userName, email, mobile, address, membershipType, membershipExpiry, active } = req.body;

        // Optional: Add additional validation logic here if needed

        // Update membership using findByIdAndUpdate with new and runValidators options
        const updatedMembership = await MembershipList.findByIdAndUpdate(
            req.params.id,
            { userName, email, mobile, address, membershipType, membershipExpiry, active },
            { new: true, runValidators: true }
        );

        // If membership not found, return 404 with message
        if (!updatedMembership) {
            return res.status(404).json({});
        }

        // Return updated membership data with 200 status
        res.status(200).json(updatedMembership);
    } catch (error) {
        // Pass any error to the next middleware
        next(error);
    }
};
exports.deleteMembership = async (req, res, next) => {
    try {
        const deletedMembership = await MembershipList.findByIdAndDelete(req.params.id);
        if (!deletedMembership) {
            return res.status(404).json({});
        }
        res.status(200).json({ message: 'Membership deleted' });
    } catch (error) {
        next(error);
    }
};

















