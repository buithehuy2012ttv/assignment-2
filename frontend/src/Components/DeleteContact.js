import React from "react";

function DeleteContact({ contactId, onDeleteContact }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/contacts/${contactId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDeleteContact(contactId); // Pass the deleted contact's ID to the parent component for removal
      } else {
        console.error("Failed to delete contact. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <button className="basic-button" onClick={handleDelete}>Delete Contact</button>
    
  );
}

export default DeleteContact;
