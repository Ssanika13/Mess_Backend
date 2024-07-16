const EmployRegistration = require('../Models/EmployRegistrationModel'); // Adjust the path to your model

// Create a new registration
exports.createEmployRegistration = async (req, res) => {
    try {
        const employRegistration = new EmployRegistration(req.body);
        await employRegistration.save();
        res.status(201).json(employRegistration);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read all registrations
exports.getAllEmployRegistrations = async (req, res) => {
    try {
        const employRegistrations = await EmployRegistration.find({});
        res.status(200).json(employRegistrations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read a single registration by ID
exports.getEmployRegistrationById = async (req, res) => {
    try {
        const employRegistration = await EmployRegistration.findById(req.params.id);
        if (!employRegistration) {
            return res.status(404).json({ message: 'Employ Registration not found' });
        }
        res.status(200).json(employRegistration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a registration by ID
exports.updateEmployRegistration = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'password', 'phone', 'email', 'address', 'role', 'createdAt', 'updatedAt'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const employRegistration = await EmployRegistration.findById(req.params.id);

        if (!employRegistration) {
            return res.status(404).json({ message: 'Employ Registration not found' });
        }

        updates.forEach(update => employRegistration[update] = req.body[update]);
        await employRegistration.save();

        res.status(200).json(employRegistration);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a registration by ID
exports.deleteEmployRegistration = async (req, res) => {
    try {
        const employRegistration = await EmployRegistration.findByIdAndDelete(req.params.id);

        if (!employRegistration) {
            return res.status(404).json({ message: 'Employ Registration not found' });
        }

        res.status(200).json({ message: 'Employ Registration deleted successfully', employRegistration });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
