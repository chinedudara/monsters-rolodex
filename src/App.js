import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(res => this.setState({monsters: res}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter(monster => (monster.name.toLowerCase().includes(searchField.toLowerCase())))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder='Search monsters' handleChange={this.handleChange} />
        <CardList monsters={filtered}/>
      </div>
    );
  }
}

export default App;
