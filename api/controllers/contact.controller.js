const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op; //Op is basically where clause

// Create contact

exports.create = async (req, res) => {
    try {
      const contact = {
        name: req.body.name,
      };
  
      // Create the contact in the database
      const createdContact = await Contacts.create(contact);
  
      console.log('Created contact:', createdContact); // Log the created contact data
  
      // Send a valid JSON response
      res.status(201).json({ contact: createdContact.toJSON() });
    } catch (err) {
      console.error("Error creating contact:", err);
      res.status(500).json({ error: err.message || "Some error occurred while creating the Contact." }); // Respond with a JSON object containing the error message
    }
  };

// Get all contacts
exports.findAll = async (req, res) => {

  Contacts.findAll().then(data=>{
      res.send(data)
  })
  .catch(error =>{
      res.send({message: 'Error while fetching data: ' + error})
  })
  
};


// Get one contact by id
exports.findOne = async (req, res) => {
    
    const contact_Id = req.params.contactId;

    try{
        const required_Contact = await Contacts.findByPk(contact_Id)
        if( !required_Contact){
            res.send({message: 'Contact not found'})
        }
        else{
            res.send(required_Contact)
        }

    } catch(err){
        res.send({message: 'Error while finding the contact by id: ' + err})
        
    }
  
};

// Update one contact by id
exports.update = async (req, res) => {
  const contact_id = req.params.contactId;

  try {
    const required_Contact = await Contacts.findByPk(contact_id);
    if (!required_Contact) {
      res.send({ message: 'The contact in search is not on the list' });
    } else {
      const updatedContact = await required_Contact.update(req.body);
      res.json(updatedContact);
    }
  } catch (err) {
    console.error('Error while updating contact:', err);
    res.status(500).json({
      error:
        err.message ||
        'Some error occurred while updating the contact.',
    });
  }
};

// Delete one contact by id
exports.delete = (req, res) => {
    const id = parseInt(req.params.contactId); // Convert the id parameter to an integer
  
    Contacts.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Contact was deleted successfully!" });
        } else {
          res.send({ message: "Cannot delete Contact. Contact not found." });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error while deleting the contact: " + err.message,
        });
      });
  };