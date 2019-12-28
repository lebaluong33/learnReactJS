import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: "1a", name: "Le Ba Luong", age: 20 },
        { id: "2b", name: "Dang Quoc Khanh", age: 29 },
        { id: "3c", name: "Nguyen Thi Nhu Quyen", age: 23 }
      ],
      showPerson: false,
      showCockpit: true
    };
  };
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount(){
  //   console.log("[App.js] componentWillMount");
  // }

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

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return { Message: '[App.js]'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate',snapshot);
  }

  render(){
    let persons = null;
    console.log('[App.js] Rendering...');
    if (this.state.showPerson) {
      persons = <Persons
                  clicked = {this.deletePersonHandler}
                  persons = {this.state.persons}
                  changed = {this.nameChangeHandler}/>;
    }
    return(
    <div className = "App" >
      <button onClick={() => {this.setState({showCockpit : false })}}> Remove Cockpit</button>
      {this.state.showCockpit? <Cockpit
        title = {this.props.appTitle} 
        personsLength = {this.state.persons.length}
        showPerson = {this.state.showPerson}
          clicked={this.togglePerson} /> :null}
      {persons}
    </div>
  );
  };
};
export default App;
