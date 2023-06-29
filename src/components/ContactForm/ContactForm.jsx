import { nanoid } from 'nanoid';
import css from './contactForm.module.css';
const ContactForm = ({contacts, setContacts }) => {
  
  const appendContacts = (contact) => {
    setContacts([...contacts, contact]);
  };

  const addContact = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    if (contacts.some((item) => item.name.toLowerCase() === contact.name.toLowerCase())) {
      return alert(`$(contact.name) already in contacts.`)
    }

    appendContacts(contact);
    event.target.reset();
  };
  
    return (
      <form onSubmit={addContact} className={css.form} >
        <input className={css.inputName} 
          type="text"
          name="name"
          id=''
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <input className={css.inputNumber} 
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
        <button className={css.addContactBtn} type="submit">Add contact</button>
      </form>
    );
}


export default ContactForm;
