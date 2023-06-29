import { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [ contact, setContact ] = useState({
    name: '',
    phone: '',
    photo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ 
      ...contact, // spread operator
      [name]: value 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newContact = {
      ...contact,
      id: Date.now(),
    }

    onAddContact(newContact);

    // reset form
    setContact({
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
              value={contact.name}
            />
          </div>
          {/* input phone */}
          <div className="contact-form__column">
            <label className="contact-form__label" htmlFor='phone'>
              Teléfono:
            </label>
            <input
              type="number"
              id='phone'
              name="phone"
              className="contact-form__input"
              required
              onChange={handleChange}
              value={contact.phone}
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
              value={contact.photo}
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
