import './ContactForm.css';

const ContactForm = () => {

  return (
    <div className='container'>
      <h2 className="contact-form__title">Agregar contacto</h2>
      <div className="contact-form">
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
            />
          </div>
          {/* input photo */}
          <div className="contact-form__column">
            <label className="contact-form__label" htmlFor='photo'>
              Foto:
            </label>
            <input
              type="text"
              id='photo'
              name="photo"
              className="contact-form__input"
            />
          </div>

        </div>
        <button type="submit" className="contact-form__button">
          Agregar
        </button>
      </div>
    </div>

  );
};

export default ContactForm;
