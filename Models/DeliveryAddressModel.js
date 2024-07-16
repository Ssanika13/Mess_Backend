const mongoose = require('mongoose');
const { Schema } = mongoose;

const deliveryAddressSchema = new Schema({
    street: {
        type: String,
        required: [true, 'Street is required'],
        trim: true
    },
    town: {
        type: String,
        required: [true, 'Town is required'],
        trim: true
    },
    district: {
        type: String,
        required: [true, 'District is required'],
        trim: true
    },
    zipcode: {
        type: String,
        required: [true, 'Zipcode is required'],
        trim: true,
        match: [/^\d{5}(-\d{4})?$/, 'Invalid zipcode format']
    },
    landmark: {
        type: String,
        required: [true, 'Landmark is required'],
        trim: true
    },
    latitude: {
        type: Number,
        required: [true, 'Latitude is required'],
        min: [-90, 'Latitude must be between -90 and 90'],
        max: [90, 'Latitude must be between -90 and 90']
    },
    longitude: {
        type: Number,
        required: [true, 'Longitude is required'],
        min: [-180, 'Longitude must be between -180 and 180'],
        max: [180, 'Longitude must be between -180 and 180']
    }
}, { timestamps: true });

module.exports = mongoose.model('DeliveryAddress', deliveryAddressSchema);
