import { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onAddContact, singleContact, setSingleContact }) => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleContact({ 
      ...singleContact, // spread operator
      [name]: value 
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newContact = {
      ...singleContact,
      id: singleContact.id ? singleContact.id : Date.now(),
    }

    const apiBase = 'http://localhost:8080/users';
    const updateBase = 'http://localhost:8080/users/3'
    const url = `http://localhost:8080/users${singleContact.id ? `/${singleContact.id}` : ''}`
    const configFetch = {
      method: singleContact.id ? 'PUT' : 'POST',
      body: JSON.stringify(newContact),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    
    try {
      setLoading(true);
      const response = await fetch(url, configFetch)
      const user = await response.json();
      onAddContact(user.data);

    } catch(error) {
      setError(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`)
    } finally {
      setLoading(false);
      // reset form
      setSingleContact({
        name: '',
        phone: '',
        photo: '',
      })
    }
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
        <button 
          type="submit" 
          className="contact-form__button"
          disabled={loading}
        >
          {loading ? 'Espere por favor' :  'Agregar'}
        </button>
      </form>
    </div>

  );
};

export default ContactForm;
