import React, { useState} from "react";

function AddContact (props) {
    const [contact, setContact] = useState('');

    const handleInputChange = e => {
        setContact(e.target.value);
    }


    //test endpoint
   

    const handleAddContact = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/contacts',{
                method : 'POST',
                headers : {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({contact}),

            });
            if (response.ok) {
                console.log("Contact has been added")
            } else {
                console.error('Failed to add contact')
            }
        } catch (error) {
            console.error('Error: ', error);
        }

    };
    return (
        <div>
            <input
            type = "text"
            placeholder="Enter your contact"
            name="name"
            onChange={handleInputChange}
            />
            <button type="checked" onClick={handleAddContact}>
                Add
            </button>
        </div>
    )
}
export default AddContact;