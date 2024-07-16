const mongoose = require('mongoose');
const { Schema } = mongoose;

const InvoiceSchema = new Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', // Ensure this matches your Order model name
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Ensure this matches your User model name if applicable
        required: true
    },
    invoiceDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    },
    items: {
        type: [{
            description: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }],
        required: true,
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'paid', 'overdue'] // Adjust according to your application's logic
    },
    payment: {
        type: String,
        required: true,
        enum: ['unpaid', 'paid'] // Adjust according to your application's logic
    }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);
