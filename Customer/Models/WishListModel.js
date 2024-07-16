const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishListSchema = new Schema({
    menuId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming menuId is an ObjectId referencing another collection
        ref: 'Menu', // Assuming there's a Menu model
        required: [true, 'Menu ID is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    description: {
        type: String, // Changed to String since description should be text
        required: [true, 'Description is required']
    }
}, { 
    timestamps: true, 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('WishList', wishListSchema);
