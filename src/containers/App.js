import React, {Component} from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
      persons: [
        { id: "1a", name: "Le Ba Luong", age: 20 },
        { id: "2b", name: "Dang Quoc Khanh", age: 29 },
        { id: "3c", name: "Nguyen Thi Nhu Quyen", age: 23 }
      ],
      showPerson: false,
    };
  nameChangeHandler = (event, id) => {
    const name = event.target.value;
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = name;
    const persons = [...this.state.persons]; 
    persons[personIndex] = person;   
    this.setState({persons:persons});
  }
  deletePersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex,1);
    this.setState({persons:person});
  }
  togglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson
      });
  }
  render(){
    let persons = null;
    if (this.state.showPerson) {
      persons = <Persons
                  clicked = {this.deletePersonHandler}
                  persons = {this.state.persons}
                  changed = {this.nameChangeHandler}/>;
    }
    return(
    <div className = "App" >
      <Cockpit
        persons = {this.state.persons}
        showPerson = {this.state.showPerson}
        clicked = {this.togglePerson}/>
      {persons}
    </div>
  );
  };
};
export default App;
