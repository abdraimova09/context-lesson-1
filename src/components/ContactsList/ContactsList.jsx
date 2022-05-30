import React, { useContext, useEffect } from 'react';
import { contactsContext } from '../../contactsContext';

const ContactsList = () => {
    const { getContacts, contacts, deleteContact } = useContext(contactsContext)
    useEffect(() => {
        getContacts()
    }, [])
    return (
        <div>
            {contacts.map(item => (<div style={{marginBottom: "30px"}} key={item.id}>Name: {item.name}, LastName: {item.lastName}, Phone: {item.phone} 
            <button onClick={()=> deleteContact(item.id)}>Delete</button> </div>))}
        </div>
    );
};

export default ContactsList;