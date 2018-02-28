import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Agustin', age: 24 },
      { name: 'Anto', age: 23 },
      { name: 'Pepe', age: 89 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clciked!');
    //DON'T DO THIS: this.state.persons[0].name = 'Agustino'
    this.setState({persons: [
      { name: newName, age: 24 },
      { name: 'Antoo', age: 23 },
      { name: 'Pepeo', age: 89 }
    ]
  })
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      { name: 'Agustin', age: 24 },
      { name: event.target.value, age: 23 },
      { name: 'Pepeo', age: 89 }
    ]
  })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Agustino!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}>
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
