import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

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
    const styles = {
      button : {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "solid 1px blue",
        padding: "8px",
        cursor: "pointer",
        fontSize: "25px",
        width: "150px"
      }
    };
    if (this.state.showPerson) {
      persons = <Persons
                  clicked = {this.deletePersonHandler}
                  persons = {this.state.persons}
                  changed = {this.nameChangeHandler}/>;
      styles.button.backgroundColor = "red";
    }
    let classes = [];
    if(this.state.persons.length <= 2) { 
      classes.push('red')
    };
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    };
    return(
    <div className = "App" >
      <h1>Hi, I am React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button
        style = {styles.button}
        onClick={this.togglePerson}
      >Switch</button>
      {persons}
    </div>
  );
  };
};
export default App;
