import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
        backgroundColor: "white",
        font: "inherit",
        border: "solid 1px blue",
        padding: "8px",
        cursor: "pointer",
        fontSize: "20px"
      }
    };
    if (this.state.showPerson) {
      persons = this.state.persons.map((item ,index) =>{
        return <Person
          key= {index}
          name = {item.name}
          age = {item.age}
          clicked = {() => this.deletePersonHandler(index)}
          changed={(event) => this.nameChangeHandler(event,item.id)} />
      });
    }
    return(
    <div className = "App" >
      <h1>Hi, I am React App</h1>
      <p>This is really working</p>
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
