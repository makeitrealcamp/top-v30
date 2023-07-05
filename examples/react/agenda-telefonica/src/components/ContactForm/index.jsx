import { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onAddContact, singleContact, setSingleContact }) => {


  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleContact({ 
      ...singleContact, // spread operator
      [name]: value 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newContact = {
      ...singleContact,
      id: singleContact.id ? singleContact.id : Date.now(),
    }

    onAddContact(newContact);

    // reset form
    setSingleContact({
      name: '',
      phone: '',
      photo: '',
    })

  }

  return (
    <div className='container'>
      <h2 className="contact-form__title">Agregar contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>

        <div>
          {/* input name */}
          <div className="contact-form__column">
            <label className="contact-form__label" htmlFor='name'>
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-form__input"
              required
              onChange={handleChange}
              value={singleContact.name}
            />
          </div>
          {/* input phone */}
          <div className="contact-form__column">
            <label className="contact-form__label" htmlFor='phone'>
              Teléfono:
            </label>
            <input
              type="text"
              id='phone'
              name="phone"
              className="contact-form__input"
              required
              onChange={handleChange}
              value={singleContact.phone}
            />
          </div>
          {/* input photo */}
          <div className="contact-form__column">
            <label className="contact-form__label" htmlFor='photo'>
              Foto:
            </label>
            <input
              type="url"
              id='photo'
              name="photo"
              className="contact-form__input"
              onChange={handleChange}
              value={singleContact.photo}
            />
          </div>

        </div>
        <button type="submit" className="contact-form__button">
          Agregar
        </button>
      </form>
    </div>

  );
};

export default ContactForm;
