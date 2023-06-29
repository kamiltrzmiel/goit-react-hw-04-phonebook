import css from './contactList.module.css'

const ContactList = ({ contacts, filterValue, setContacts }) => {

    const deleteContact = id => {
      setContacts((prevState) => prevState.filter(contact => contact.id !== id));
    };

    const filteredArray = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
    <ul className={css.contactList}>
      {filteredArray.map(({ id, name, number }) => (
        <li className={css.contactListitem} key={id}>
          <span>{name}: {number}</span>
          <button className={css.delBtn} type="button" onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList