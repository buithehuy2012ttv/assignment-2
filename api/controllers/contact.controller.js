const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = async (req, res) => {
    const { contact } = req.body;
    console.log("Received request with name:", contact); // Add this line for debugging

    try {
        if (!contact) {
            return res.status(400).send({
                message: "Contact cannot be empty"
            });
        }

        const createdContact = await Contacts.create({
            name: contact // Map 'contact' to 'name'
        });

        res.status(201).send(createdContact); // Send the created contact as the response
        } catch (err) {
            console.error('Error creating contact:', err);
            res.status(500).send({
                message: err.message || "Some error occurred while creating the contact"
            });
        }
    };

// Get all contacts
exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one contact by id
exports.findOne = (req, res) => {
    // Implement this if you want to retrieve a single contact by ID
};

// Update one contact by id
exports.update = (req, res) => {
    // Implement this if you want to update a contact by ID
};

// Delete one contact by id
exports.delete = (req, res) => {
    // Implement this if you want to delete a contact by ID
};
