const mongoose = require('mongoose');
const { Schema } = mongoose;

const deliveryMemberSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String, // Changed to String to support leading zeros and formatting
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // Example validation for a 10-digit phone number
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    currentOrderId: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    lastLocation: {
        type: String,
        required: true,
        trim: true
    },
    lastUpdate: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });

deliveryMemberSchema.index({ phone: 1 }); // Create an index on the phone field for faster queries

module.exports = mongoose.model('DeliveryMember', deliveryMemberSchema);
