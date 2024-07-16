const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
   orderId: {
       type: [{type: mongoose.Schema.Types.ObjectId, ref: 'ordersModel' }],
       required: true
   },
   userId: {
       type: String,
       required: true
   },
   rating: {
       type: Number,
       required: true
   },
   comment: {
       type: String,
       required: true
   },
   createdAt: {
       type: Date,
       required: true
   },
   
}, { timestamps: true });

module.exports = mongoose.model('review', reviewSchema);
