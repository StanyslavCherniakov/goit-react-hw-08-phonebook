import React, { Component, useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import LsService from './utils/localStorage';

import { nanoid } from 'nanoid';
import { Title, TitleContacts, Wrapper } from './App.styled';


export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addContact = (data) => {
    const { name, number } = data;
    if (checkDoubleContact(data)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(pState => [newContact, ...pState]);
  };

  const checkDoubleContact = (inputData) => {
    return contacts.find(contact => contact.name === inputData.name);
  };

  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  const deleteContact = (id) => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };


  return (
    (<Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={getVisibleContacts()} deleteContact={deleteContact} />
    </Wrapper>));
};


// export class App extends Component {
//
//   state = {
//     contacts: [],
//     filter: '',
//   };
//
//   componentDidMount() {
//     if (LsService.load('phonebook')) {
//       const LSData = LsService.load('phonebook');
//       this.setState({ contacts: LSData });
//     }
//   }
//
//   componentDidUpdate(pProps, pState) {
//     if (pState.contacts !== this.state.contacts) {
//       LsService.save('phonebook', this.state.contacts);
//     }
//   }
//
//   handleInputChange = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };
//
//   addContact = (data) => {
//     const { name, number } = data;
//     if (this.checkDoubleContact(data)) {
//       alert(`${name} is already in your contacts!`);
//       return;
//     }
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };
//
//   checkDoubleContact = (inputData) => {
//     return this.state.contacts.find(contact => contact.name === inputData.name);
//   };
//
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalized = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
//   };
//
//   deleteContact = (id) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(el => el.id !== id),
//     }));
//   };
//
//   render() {
//     const visibleContacts = this.getVisibleContacts();
//
//     return (<Wrapper>
//       <Title>Phonebook</Title>
//       <ContactForm onSubmit={this.addContact} />
//       <TitleContacts>Contacts</TitleContacts>
//       <Filter value={this.state.filter} onFilter={this.handleInputChange} />
//       <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
//     </Wrapper>);
//   }
// }



