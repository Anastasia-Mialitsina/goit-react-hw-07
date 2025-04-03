import React from "react";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import style from './ContactList.module.css';
const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts); 
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={style.list}>
          {contact.name} - {contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

