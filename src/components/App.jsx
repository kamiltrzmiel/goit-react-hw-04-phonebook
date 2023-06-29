import { useEffect, useState } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const initState = [
  { id: 'id-1', name: 'Jose Arcadio Morales', number: '+34 459-123-563' },
  { id: 'id-2', name: 'Jan Nowakowski', number: '+48 443-859-125' },
  { id: 'id-3', name: 'Bruno Bierhals', number: '+49 645-122-792' },
  { id: 'id-4', name: 'Rolf Ruckzug', number: '+43 227-252-929' },
];
    
const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts) || [...initState]
    setContacts(parsedContacts);
  },[]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, isMounted]);
  

  const appendContacts = contact => {
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  // eslint-disable-next-line no-unused-vars
  const addContact = event => {
    event.preventDefault();

    
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

  
    
    const isAlreadyInContacts = contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isAlreadyInContacts) {
      return alert(`{contact.name} already in contacts`);
    };

    appendContacts(contact);
    event.target.reset();
  };
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2 style={{ textAlign: 'center'}}>Contacts</h2>
      <Filter setFilter={setFilter} />
      <ContactList
        contacts={contacts}
        filterValue={filter}
        setContacts={setContacts}
      />
    </>
  );
};

export default App;