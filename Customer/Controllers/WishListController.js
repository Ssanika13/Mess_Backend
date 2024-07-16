const WishList = require('../Models/WishListModel'); // Adjust the path to your wishList model

// Create a new wishList item
const createWishListItem = async (req, res) => {
    try {
        const newWishListItem = new WishList(req.body);
        await newWishListItem.save();
        res.status(201).json(newWishListItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all wishList items
const getWishListItems = async (req, res) => {
    try {
        const wishListItems = await WishList.find();
        res.status(200).json(wishListItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single wishList item by ID
const getWishListItemById = async (req, res) => {
    try {
        const wishListItem = await WishList.findById(req.params.id);
        if (!wishListItem) {
            return res.status(404).json({ message: 'WishList item not found' });
        }
        res.status(200).json(wishListItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a wishList item by ID
const updateWishListItem = async (req, res) => {
    try {
        const updatedWishListItem = await WishList.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedWishListItem) {
            return res.status(404).json({ message: 'WishList item not found' });
        }
        res.status(200).json(updatedWishListItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a wishList item by ID
const deleteWishListItem = async (req, res) => {
    try {
        const deletedWishListItem = await WishList.findByIdAndDelete(req.params.id);
        if (!deletedWishListItem) {
            return res.status(404).json({ message: 'WishList item not found' });
        }
        res.status(200).json({ message: 'WishList item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createWishListItem,
    getWishListItems,
    getWishListItemById,
    updateWishListItem,
    deleteWishListItem
};
