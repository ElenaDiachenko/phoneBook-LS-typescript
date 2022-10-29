import React, { FC } from 'react';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';
import { IContact } from 'types/contact';

interface IProps {
  name: IContact['name'];
  number: IContact['number'];
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Contact: FC<IProps> = ({ name, number, onDelete }) => (
  <>
    <ContactName>{name} :</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton onClick={onDelete}>Delete</DeleteButton>
  </>
);
