const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
   orderDate: {
       type: Date,
       required: true
   },
   items: {
       type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'addMenuModel' }],
       required: true
   },
   total: {
       type: Number,
       required: true
   },
   deliveryAddress: {
       type: String,
       required: true
   },
   status: {
       type: String,
       enum: ['pending', 'processed', 'shipped', 'delivered', 'canceled'], // Example statuses
       required: true
   },
   payment: {
       type: Number,
       required: true
   }
}, { timestamps: true });

module.exports = mongoose.model('Order', ordersSchema);
