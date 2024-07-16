const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // Validates for a 10-digit phone number
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    mobile: {
        type: String, // Changed to String to handle formatting and leading zeros
        required: [true, 'Mobile number is required'],
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // Validates for a 10-digit mobile number
            },
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email validation
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['user', 'admin', 'moderator'], // Define roles as needed
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
