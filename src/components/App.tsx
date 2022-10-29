import { FC, ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { Title, TitleContact, Section } from './App.styled';
import { IContact } from 'types/contact';
import { Values } from './ContactForm/ContactForm';

const initialContacts: IContact[] = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App: FC = () => {
  const [contacts, setContacts] = useState<IContact[]>(
    JSON.parse(localStorage.getItem('contacts') as string) ?? initialContacts
  );
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }: Values) => {
    const newContact = { id: nanoid(), name, number };

    contacts.find(contact => contact.name === name)
      ? Notify.info(`${name} is already in contacts`, {
          position: 'center-top',
          fontSize: '20px',
          width: '450px',
          borderRadius: '4px',
          closeButton: true,
          info: {
            background: '#000000',
            notiflixIconColor: 'rgba(225,225,225,0.5)',
          },
        })
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const filterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value.toLowerCase().trim());
  };

  const filterContactList = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId: string) => {
    const filteredContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(filteredContacts);
  };
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContact>Contacts</TitleContact>
      <Filter value={filter} onChange={filterHandler} />
      <ContactList
        contacts={filterContactList()}
        onDeleteContact={deleteContact}
      />
    </Section>
  );
};
