import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
    collection,
    addDoc,
    getDocs,
  } from 'firebase/firestore';

export const ContactsFormContext = React.createContext();

const ContactsFormProvider = (props) => {

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const contactsAux = [];
    try {
      const querySnapshot = await getDocs(collection(db, 'contactForm'));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        contactsAux.push({ id: doc.id, ...doc.data() });
      });
      setContacts(contactsAux);
      console.log(contactsAux);
      console.log("testeeeeeeeee");
    } catch (error) {
      console.error('Error fetching collection: ', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);


  const onContactsFormSubmit = async (event) => {
    console.log("testando formulario");
    event.preventDefault();
    console.log(event.target.name.value);
    const newContactForm = {
      name: event.target.name.value,
      email: event.target.email.value,
      comments: event.target.comments.value,
     
    };
    try {
          const docRef = await addDoc(collection(db, "contactForm"), newContactForm);
          console.log(docRef);
          fetchContacts();
      } catch (error) {
          console.error('Error fetching collection: ', error);
      }
    };
        
    return (
      <ContactsFormContext.Provider value={{ onContactsFormSubmit: onContactsFormSubmit }}>
        {props.children}
      </ContactsFormContext.Provider>
    );
    
};

export default ContactsFormProvider;