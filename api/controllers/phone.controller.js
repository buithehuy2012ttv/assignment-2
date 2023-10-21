const db = require("../models");
const Phones = db.phones;
const Op = db.Sequelize.Op; //Op is basically where clause

// Create phone
exports.create = async (req, res) => {
    try {
      const contactId = req.params.contactId;
      const { name, phoneNumber } = req.body;
  
      const createdPhone = await Phones.create({
        name,
        phoneNumber,
        contactId,
      });
  
      console.log('Created phone number:', createdPhone);
  
      res.status(201).json({ phone: createdPhone.toJSON() });
    } catch (err) {
      console.error("Error creating phone number:", err);
      res.status(500).json({ error: err.message || "Some error occurred while creating the phone number." });
    }
  };

// Get all phones
exports.findAll = async (req, res) => {
    try {
      const contactId = req.params.contactId; 
      const phones = await Phones.findAll({
        where: { contactId }, 
      });
      res.send(phones);
    } catch (err) {
      console.error("Error while fetching phones:", err);
      res.status(500).send({
        error:
          err.message ||
          "Some error occurred while fetching the phone numbers.",
      });
    }
  };
  

// Get one phone by id
exports.findOne = async (req, res) => {
  const phoneId = req.params.phoneId; // Extract phoneId from the request params

  try {
    const phone = await Phones.findByPk(phoneId); // Use `findByPk` to find the phone by its primary key
    if (!phone) {
      return res.status(404).send({ message: "Phone not found" });
    }
    res.send(phone);
  } catch (err) {
    console.error("Error while finding the phone by id:", err);
    res.status(500).send({ error: err.message || "Some error occurred while finding the phone." });
  }
};
// Update one phone by id
exports.update = async (req, res) => {
  const phoneId = req.params.phoneId;

  try {
    const phoneToUpdate = await Phones.findByPk(phoneId);
    if (!phoneToUpdate) {
      res.status(404).json({ message: 'Phone not found' });
    } else {
      const updatedPhone = await phoneToUpdate.update(req.body);
      res.json(updatedPhone);
    }
  } catch (err) {
    console.error('Error while updating phone:', err);
    res.status(500).json({
      error:
        err.message ||
        'Some error occurred while updating the phone.',
    });
  }
};

// Delete one phone by id
exports.delete = async (req, res) => {
  const phoneId = req.params.phoneId; 

  try {
    const phone = await Phones.findByPk(phoneId); 
    if (!phone) {
      return res.status(404).json({ message: "Phone not found" });
    }
    await phone.destroy();

    res.status(204).send(); 
  } catch (err) {
    console.error("Error while deleting the phone:", err);
    res.status(500).json({ error: err.message || "Some error occurred while deleting the phone." });
  }
};