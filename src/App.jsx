import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactFilter from "./components/ContactFilter/ContactFilter";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default App;

