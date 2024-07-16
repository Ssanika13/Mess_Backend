const mongoose = require('mongoose');
const { Schema } = mongoose;

const employRegistrationSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    phone: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['admin', 'employee'] // Example: adjust as needed
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('EmployRegistration', employRegistrationSchema);
