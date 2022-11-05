import React, { Component, createElement } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    person: [
      {
        name: "max", age: 21
      },
      {
        name: "min", age: 25
      },
      {
        name: "simple", age: 24
      },
    ],
    othestate: "other state text",
  }
  switchNameHandelar = () => {

    this.setState({
      person: [
        {
          name: "chenged Name ", age: 21
        },
        {
          name: "hello", age: 25
        },
        {
          name: "changed by clicked", age: 24
        },
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1> I am here for you!!!!!!</h1>
        <button onClick={this.switchNameHandelar}>Switch Name </button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>

        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>
        <Person anotherState={this.state.othestate}></Person>
      </div>
    );
    // return React.createElement('div', {'className' : 'App'}, createElement('h4', null, 'I am here')); 
  }
}

export default App;