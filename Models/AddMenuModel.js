const mongoose = require('mongoose');
const { Schema } = mongoose;

const addMenuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative']
    },
    available: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['appetizer', 'main course', 'dessert', 'beverage']
    },
    allergens: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true,
        min: [0, 'Calories cannot be negative']
    },
    image_url: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^(http|https):\/\/[^ "]+$/.test(v);
            },
            message: props =>`${props.value} is not a valid URL!`
        }
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('addMenu', addMenuSchema);