import React, { useState } from "react";
import AddContact from "./AddContact";
import Header from "./Header";
import GetContact from "./GetContact";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    const addNewContact = (newContact) => {
        setContacts([...contacts, newContact]);
      };

    return (
        <div>
            <Header />
            <AddContact addNewContact={addNewContact} />
            <GetContact contacts={contacts} />
            

        </div>

    )
}
export default ContactList;