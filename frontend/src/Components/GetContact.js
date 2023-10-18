import React, { useEffect, useState } from 'react';

const GetContact = ({ contacts }) => {
    const [localContacts, setLocalContacts] = useState([]);

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch('http://localhost:5000/api/contacts');
                if (response.ok) {
                    const data = await response.json();
                    setLocalContacts(data);
                } else {
                    console.error('Failed to fetch contacts');
                }
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        }
        fetchContacts();
    }, []);

    return (
        <div>
            <ul>
                {contacts.map((contact, id) => (
                    <li key={id}>{contact.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default GetContact;
