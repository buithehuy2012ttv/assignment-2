import React from "react";
import PhoneList from "./PhoneList";
import DeleteContact from "./DeleteContact";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      {contacts.map((contact) => (
        <div className="space" key={contact.id}>
          <li className="space">{contact.name}</li>
          <div className="space"> 
               <DeleteContact contactId={contact.id} onDeleteContact={onDeleteContact} />
           </div> 
          <PhoneList contactId={contact.id} />
        </div>
      ))}
    </div>
  );
}

export default ContactList;