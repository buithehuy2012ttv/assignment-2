import React, { useState } from "react";


function AddPhone({ contactId, onAddPhone }) {
  const [phoneName, setPhoneName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNameChange = (e) => {
    setPhoneName(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleAddPhone = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/contacts/${contactId}/phones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: phoneName,
          phoneNumber: phoneNumber,
        }),
      });

      if (response.ok) {
        onAddPhone({ phoneName, phoneNumber }); // Pass the new phone data to the parent component
        setPhoneName('');
        setPhoneNumber('');
      } else {
        console.error("Failed to add phone. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Phone Name"
        value={phoneName}
        onChange={handlePhoneNameChange}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <button className="basic-button" onClick={handleAddPhone}>Add Phone</button>
    </div>
  );
}

export default AddPhone;
