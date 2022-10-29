import { FC } from 'react';
import { ContactItem, StyledList } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { IContact } from 'types/contact';

interface IProps {
  contacts: IContact[];
  onDeleteContact: (id: string) => void;
}

export const ContactList: FC<IProps> = ({ contacts, onDeleteContact }) => (
  <StyledList>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}>
        <Contact
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      </ContactItem>
    ))}
  </StyledList>
);
