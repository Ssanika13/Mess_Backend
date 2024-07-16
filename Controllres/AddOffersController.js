const AddOffers = require('../Models/AddOffersModel');

exports.createOffers = async (req, res, next) => {
    try {
        const newOffers = new AddOffers(req.body);
        const savedOffers = await newOffers.save();
        res.status(201).json(savedOffers);
    } catch (error) {
        next(error);
    }
};

exports.getAllOffers = async (req, res, next) => {
    try {
        const offers = await AddOffers.find({});
        res.status(200).json(offers);
    } catch (error) {
        next(error);
    }
};

exports.getOffersById = async (req, res, next) => {
    try {
        const offers = await AddOffers.findById(req.params.id);
        if (!offers) {
            return res.status(404).json({ message: 'Offer not found' });
        }
        res.status(200).json(offers);
    } catch (error) {
        next(error);
    }
};

exports.updateOffers = async (req, res, next) => {
    try {
        const { title, description, discount, validity, createdAt } = req.body;

        const updatedOffers = await AddOffers.findByIdAndUpdate(
            req.params.id,
            { title, description, discount, validity, createdAt },
            { new: true, runValidators: true }
        );

        if (!updatedOffers) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json(updatedOffers);
    } catch (error) {
        next(error);
    }
};

exports.deleteOffers = async (req, res, next) => {
    try {
        const deletedOffers = await AddOffers.findByIdAndDelete(req.params.id);
        if (!deletedOffers) {
            return res.status(404).json({ message: 'Offer not found' });
        }
        res.status(200).json({ message: 'Offer deleted' });
    } catch (error) {
        next(error);
    }
};
