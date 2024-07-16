const express = require('express');
const wishListController = require('../Controllers/WishListController');
const router = express.Router();

router.post('/wishlist', wishListController.createWishListItem);
router.get('/wishlist', wishListController.getWishListItems);
router.get('/wishlist:id', wishListController.getWishListItemById);
router.patch('/wishlist:id', wishListController.updateWishListItem);
router.delete('/wishlist:id', wishListController.deleteWishListItem);

module.exports = router;
