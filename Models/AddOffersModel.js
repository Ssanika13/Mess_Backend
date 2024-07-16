const mongoose = require('mongoose');
const { Schema } = mongoose;

const addOffersSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    discount: {
        type: Number,
        required: [true, 'Discount is required'],
        min: [0, 'Discount must be at least 0'],
        max: [100, 'Discount cannot be more than 100']
    },
    validity: {
        type: Date,
        required: [true, 'Validity date is required']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('AddOffers', addOffersSchema);
