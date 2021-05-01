
import React, { Component } from 'react';
import './Style.css';
import './ListItem'
import ListItems from './ListItem';
import './ListItems.css'

class Footer extends Component {
  render() {
    return (
      <footer className='text-center'>Created by Hacidmind</footer>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ text: 'milk', key: 1 }, { text: 'garri', key: 2 }],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem
    console.log(newItem);
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key)
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className='App'>

        <header>
          <h1 className='text-center '>Hacidmind TodoList App</h1>
          <form onSubmit={this.addItem}>
            <div id='to-do-form'>
              <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput} />
              <button type='submit'>Add Item</button>
            </div>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} />
        <Footer />
      </div>
    )
  }
}

