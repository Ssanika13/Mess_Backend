module.exports = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const menuRouter = require('./Routs/AddMenuRoter'); // Adjust the path to your route
const ordersRouter = require('./Routs/OrdersRouter');
const membershipRoutes = require('./Routs/MembershipListRouer'); // Adjust the path to your routes
const offersRoutes = require('./Routs/AddOffersRouter');
const employRouter = require('./Routs/EmployRegistrationRouter');
const deliveryMemberRoutes = require('./Routs/DelivaryMemberRouter'); // Adjust the path to your delivery member routes
const reviewRouter = require('./Routs/ReviewRouter'); // Adjust the path to your routes file
const deliveryAddressRouter = require('./Routs/DeliveryAddressRouter'); // Adjust the path to your routes file
const invoiceRoutes = require('./Routs/InvoiceRouter'); // Adjust the path as needed
const profileRouter = require('./Routs/ProfileRouter');
const paymentRouter = require('./Routs/PaymentRouter'); // Adjust the path as needed
const wishListRouter = require('./Customer/Routs/WishListRouter'); // Adjust the path to your router
const cprofileRouter = require('./Customer/Routs/ProfileRouter'); // Adjust the path to your router
const citemsRoutes = require('./Customer/Routs/ItemsRouter'); // Adjust the path as needed
const cmembership = require('./Customer/Routs/MembershipRouter'); // Adjust the path as needed




// Load environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(menuRouter);
app.use(ordersRouter);
app.use(membershipRoutes);
app.use(offersRoutes);
app.use(employRouter);
app.use(deliveryMemberRoutes);
app.use(reviewRouter);
app.use(deliveryAddressRouter);
app.use(invoiceRoutes);
app.use(profileRouter);
app.use(paymentRouter);
app.use(wishListRouter);
app.use(cprofileRouter);
app.use(citemsRoutes);
app.use(cmembership);








app.listen(port, () => {
    console.log(`Server is running on port http://127.0.0.1:${port}`);
});