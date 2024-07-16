const mongoose = require('mongoose');
const { Schema } = mongoose;

const membershipSchema = new Schema({
    userId: {
        type: String,
        required: [true, 'User ID is required'],
        trim: true
    },
    startDate: {
        type: Date,
        required: [true, 'Start date is required'],
        trim: true
    },
    endDate: {
        type: Date,
        required: [true, 'End date is required'],
        trim: true
    },
    status: {
        type: String,
        required: [true, 'Status is required'],
        enum: ['active', 'inactive', 'expired'],
        trim: true
    },
    mealPlan: {
        type: String,
        required: [true, 'Meal plan is required'],
        trim: true
    },
    payment: {
        type: Number,
        required: [true, 'Payment is required'],
        min: [0, 'Payment must be a positive number']
    },
    details: {
        type: String,
        required: [true, 'Details are required'],
        trim: true
    },
    note: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
