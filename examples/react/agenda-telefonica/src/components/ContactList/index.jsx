import { useState } from 'react';
import ContactCard from '../ContactCard';
import './ContactList.css';

const ContactList = ({ 
  contacts = [], 
  setSingleContact, 
  setSelected, 
  selected,
  loadingList,
  errorList
}) => {

  const handleClick = (contact) => {
    if(selected !== contact.id) {
      setSelected(contact.id)
      setSingleContact(contact)
    } else {
      setSelected(null)
      setSingleContact({
        name: '',
        phone: '',
        photo: '',
      })
    }

  }

  if(loadingList) {
    return <div>Loading...</div>
  }

  if(errorList) {
    return <div>{errorList}</div>
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => {
        return (
          <div 
            key={contact.id} 
            className="contact-list__item"
            onClick={() => handleClick(contact)}
          >
            <ContactCard
              name={contact.name}
              phone={contact.phone}
              photo={contact.photo}
              isSelected={selected === contact.id ? true : false}
            />
          </div>
        )}
      )}
    </div>
  );
};

export default ContactList;
