import React, { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  addContact = (data) => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <input type='text' name='filter' value={this.state.filter} onChange={this.handleInputChange} />
        <ul>
          {visibleContacts.map(el => <li key={el.id}>{el.name}: {el.number}</li>)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {};


