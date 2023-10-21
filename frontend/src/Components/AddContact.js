import React, { useState, useEffect } from "react";
import Header from "./Header";
import ContactList from "./ContactList";

function AddContact() {
  const [contact, setContact] = useState('');
  const [contacts, setContacts] = useState([]); // State for storing contacts

  // Define the fetchContacts function
  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contacts");
      if (response.ok) {
        const data = await response.json();
        setContacts(data); // Update the state with the fetched contacts
      } else {
        console.error("Failed to fetch contacts. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Initial fetch of contacts
    fetchContacts();
  }, []);

  const handleInputChange = (e) => {
    setContact(e.target.value);
  }

  const handleAddContact = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contact,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("New contact added:", data);
        fetchContacts(); // Call the fetchContacts function to update the contact list
        setContact('');
      } else {
        console.error("Failed to add contact. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const onDeleteContact = (contactId) => {
    // Implement the logic to remove the contact from the state
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);
  };

  return (
    <div >
      <Header  />
      <div className="item">
          <input className="center"
            type="text"
            placeholder="Input your contact"
            value={contact}
            onChange={handleInputChange}
          />
          <button className="basic-button"  type="button" onClick={handleAddContact}>
            Add
          </button>
      </div>
      <div className="item"><ContactList contacts={contacts} onDeleteContact={onDeleteContact} /></div>
    </div>
  );
}

export default AddContact;
