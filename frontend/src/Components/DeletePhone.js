import React from "react";

function DeletePhone({ phoneId, contactId, onDeletePhone }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/contacts/${contactId}/phones/${phoneId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDeletePhone(phoneId); 
      } else {
        console.error("Failed to delete phone. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <button className="basic-button" onClick={handleDelete}>Delete</button>
  );
}

export default DeletePhone;
