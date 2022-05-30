import React, { useReducer } from 'react';
import axios from 'axios';

export const contactsContext = React.createContext();

const INIT_STATE = {
    contacts: []
}
function reducer (state = INIT_STATE, action){
    switch(action.type){
        case "GET_CONTACTS":
            return {...state, contacts: action.payload };
        default: 
            return state
    }
}
const ContactsContextProvider = ({ children }) => {
    const API = "http://localhost:8000/contacts";
    const [state, dispatch] = useReducer(reducer, INIT_STATE);


    async function addContact (newContact){
        await axios.post(API, newContact)
        getContacts()
    }

    async function getContacts (){
       let response =  await axios(API);
       dispatch({
           type: "GET_CONTACTS",
           payload: response.data
       })
    }
    async function deleteContact (id){
        await axios.delete(`${API}/${id}`)
        getContacts()
    }
    return <contactsContext.Provider value={{ 
        contacts: state.contacts, 
        addContact, 
        getContacts,
        deleteContact
        }}>
        {children}
    </contactsContext.Provider>
}
export default ContactsContextProvider;