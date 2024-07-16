const express = require('express');
const router = express.Router();
const invoiceController = require('../Controllres/InvoiceController'); // Adjust the path as needed

// Create a new invoice
router.post('/invoice', invoiceController.createInvoice);

// Get all invoices
router.get('/invoice', invoiceController.getAllInvoices);

// Get a single invoice by ID
router.get('/invoice/:id', invoiceController.getInvoiceById);

// Update an invoice by ID
router.patch('/invoice/:id', invoiceController.updateInvoiceById);

// Delete an invoice by ID
router.delete('/invoice/:id', invoiceController.deleteInvoiceById);

module.exports = router;
