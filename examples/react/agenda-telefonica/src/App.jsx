import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

import { contacts as contactList } from './assets/data';

import './App.css'


function App() {
  const [contacts, setContacts] = useState(contactList);
  const  [ selected, setSelected ] = useState(null);
  const [ singleContact, setSingleContact ] = useState({
    name: '',
    phone: '',
    photo: '',
  });

  const handleAddContact = (newContact) => {
    const contactIndex = contacts.findIndex((item) => item.id === newContact.id)

    if(contactIndex !== -1) {
      const updateContacts = [...contacts];
      updateContacts[contactIndex] = newContact;
      setContacts(updateContacts);
      setSelected(null)
    } else {
      setContacts([...contacts, newContact]);
    }
  }

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ContactForm 
        onAddContact={handleAddContact}
        singleContact={singleContact} 
        setSingleContact={setSingleContact}
      />
      <ContactList 
        contacts={contacts} 
        setSingleContact={setSingleContact} 
        setSelected={setSelected}
        selected={selected}
      />
    </div>
  )
}

export default App
