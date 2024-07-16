const AddMenu = require('../Models/AddMenuModel'); // Adjust the path to your model

// Create a new menu item
exports.createMenuItem = async (req, res) => {
    try {
        const menuItem = new AddMenu(req.body);
        await menuItem.save();
        res.status(201).send(menuItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await AddMenu.find({});
        res.status(200).send(menuItems);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Read a single menu item by ID
exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await AddMenu.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).send();
        }
        res.status(200).send(menuItem);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a menu item by ID
exports.updateMenuItem = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'price', 'available', 'category', 'allergens', 'calories', 'image_url', 'active'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const menuItem = await AddMenu.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).send();
        }

        updates.forEach(update => menuItem[update] = req.body[update]);
        await menuItem.save();

        res.status(200).send(menuItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a menu item by ID
exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await AddMenu.findByIdAndDelete(req.params.id);

        if (!menuItem) {
            return res.status(404).send();
        }

        res.status(200).json({ message: 'Menu item deleted successfully', menuItem });
    } catch (error) {
        res.status(500).send(error);
    }
};


