const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemsSchema = new Schema({
    img: {
        type: String,
        required: [true, 'Image URL is required'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    available: {
        type: Boolean,
        required: [true, 'Availability is required']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    allergens: {
        type: [String], // Array of strings to list allergens
        default: []
    },
    calories: {
        type: Number,
        required: [true, 'Calories are required'],
        min: [0, 'Calories must be a positive number']
    }
}, { timestamps: true });

module.exports = mongoose.model('Items', itemsSchema);
