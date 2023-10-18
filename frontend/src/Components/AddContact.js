import React, { useState} from "react";
import ContactList from "./ContactList";


function AddContact ({ addNewContact }) {
    const [contact, setContact] = useState('');

    const handleInputChange = e => {
        setContact(e.target.value);
    }
    //test endpoint

   
    const handleAddContact = async () => {
        try {
            console.log("Request payload:", { contact }); // Log the payload
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ contact: contact }),
            });
    
            if (response.ok) {
                console.log("Contact has been added");

                //fix 1
                addNewContact({ name: contact }); // Add the new contact to the parent component
                setContact('');

            } else {
                console.error('Failed to add contact. Response status:', response.status);
                const data = await response.json();
                console.error('Error response:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };
    return (
        <div>
            <input
            type = "text"
            placeholder="Enter your contact"
            name="name"
            autoComplete="tel"
            value={contact}
            onChange={handleInputChange}
            />
            <button type="checked" onClick={handleAddContact}>
                Add
            </button>
        </div>
    )
}
export default AddContact;