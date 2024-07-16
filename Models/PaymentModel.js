const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
    method: {
        type: String,
        required: [true, 'Payment method is required'],
        enum: ['credit_card', 'paypal', 'bank_transfer'], // Specify allowed payment methods
    },
    invoice: {
        type: mongoose.Schema.Types.ObjectId, // Changed to ObjectId for referencing an invoice
        ref: 'Invoice', // Ensure this matches your Invoice model name
        required: [true, 'Invoice reference is required']
    },
    transactionId: {
        type: String,
        required: [true, 'Transaction ID is required'],
        unique: true // Ensure each transaction ID is unique
    },
    status: {
        type: String,
        required: [true, 'Payment status is required'],
        enum: ['pending', 'completed', 'failed'], // Specify allowed statuses
    }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
