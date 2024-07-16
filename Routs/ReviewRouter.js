const express = require('express');
const ReviewController = require('../Controllres/ReviewController'); // Adjust the path to your controller

const router = express.Router();

router.post('/review', ReviewController.createReview);
router.get('/review', ReviewController.getAllReviews);
router.get('/review/:id', ReviewController.getReviewById);
router.patch('/review/:id', ReviewController.updateReview);
router.delete('/review/:id', ReviewController.deleteReview);

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

module.exports = router;
