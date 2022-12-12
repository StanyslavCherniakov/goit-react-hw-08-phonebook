import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleNumberChange = (e) => {
    this.setState({
      number: e.currentTarget.value,
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


  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          Name
          <label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
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
              onChange={this.handleNumberChange}
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
        <ul>
          {this.state.contacts.map(el => <li key={el.id}>{el.name}: {el.number}</li>)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {};


