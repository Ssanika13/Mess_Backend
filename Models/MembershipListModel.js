const mongoose = require('mongoose');
const { Schema } = mongoose;

const membershipListSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    mobile: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please use a valid mobile number.']
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    membershipType: {
        type: String,
        required: true,
        enum: ['basic', 'premium', 'vip'], // Example membership types
    },
    membershipExpiry: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('MembershipList', membershipListSchema);
