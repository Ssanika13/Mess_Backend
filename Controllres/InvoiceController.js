const Invoice = require('../Models/InvoiceModel'); // Adjust the path as needed

// Create a new invoice
exports.createInvoice = async (req, res, next) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201).json(invoice);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Get all invoices
exports.getAllInvoices = async (req, res, next) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Get a single invoice by ID
exports.getInvoiceById = async (req, res, next) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Update an invoice by ID
exports.updateInvoiceById = async (req, res, next) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['orderId', 'userId', 'invoiceDate', 'dueDate', 'items', 'total', 'status', 'payment'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).json({ error: 'Invalid updates!' });
    }

    try {
        const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};

// Delete an invoice by ID
exports.deleteInvoiceById = async (req, res, next) => {
    try {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        if (!invoice) {
            return res.status(404).json({ error: 'Invoice not found' });
        }
        res.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};
