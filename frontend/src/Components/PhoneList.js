// PhoneList.js
import React, { useEffect, useState } from "react";
import AddPhone from "./AddPhone";
import DeletePhone from "./DeletePhone";

function PhoneList({ contactId }) {
  const [phones, setPhones] = useState([]);


  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/contacts/${contactId}/phones`);
        if (response.ok) {
          const data = await response.json();
          setPhones(data);
        } else {
          console.error("Failed to fetch phones. Response status:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPhones();
  }, [contactId]);

  const handleAddPhone = (newPhone) => {
    setPhones([...phones, newPhone]);
  };
 
  const handleDeletePhone = (phoneId) => {
    setPhones(phones.filter(phone => phone.id !== phoneId));
  };
  
  return (
    <div>
    <AddPhone contactId={contactId} onAddPhone={handleAddPhone} />
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <div className="space"> Phone Name: {phone.phoneName}, Phone Number: {phone.phoneNumber} </div>
            
            <DeletePhone contactId={contactId} phoneId={phone.id} onDeletePhone={handleDeletePhone} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneList;
