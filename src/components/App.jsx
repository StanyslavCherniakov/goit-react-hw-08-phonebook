import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  addContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    this.setState({ name: '', number: '' });
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
        <form onSubmit={this.addContact}>
          Name
          <label>
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              type='text'
              name='name'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              value={this.state.number}
              onChange={this.handleInputChange}
              type='tel'
              name='number'
              pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              required
            />
          </label>
          <button type='submit'>Add contact</button>
        </form>
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


