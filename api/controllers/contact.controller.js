const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create contact
exports.create = (req, res) => {
    const {contact} = req.body;

    if (!contact) {
        return res.status(400).send({
            message: "Contact cannot be empty"
        })
    }
    
    Contacts.create({
        contact: contact
    })
    .then(data => {
        res.status(201).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the contact"
    })
});
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
  
};

// Update one contact by id
exports.update = (req, res) => {
    
};

// Delete one contact by id
exports.delete = (req, res) => {
    
};
