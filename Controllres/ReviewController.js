const Review = require('../Models/ReviewModel'); // Adjust the path to your model

// Create a new review
exports.createReview = async (req, res, next) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Read all reviews
exports.getAllReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Read a single review by ID
exports.getReviewById = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Update a review by ID
exports.updateReview = async (req, res, next) => {

    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!review) {
            return res.status(404).json({ error: 'Delivery member not found' });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }


    const updates = Object.keys(req.body);
    const allowedUpdates = ['comment', 'rating']; // Adjust fields as per your Review model
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const review = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json(review);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Delete a review by ID
exports.deleteReview = async (req, res, next) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted successfully', review });
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};
