import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

const classes = 'App';
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
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
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
    this.setState( (prevState, props) => {
      return { 
        persons: persons,
        changeCounter : prevState.changeCounter +1
      }
    });
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

  loginHandler = () => {
    this.setState({
      authenticated: true
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
                  isAuthenticated = {this.state.authenticated} 
                  changed = {this.nameChangeHandler}/>;
    }
    return(
    <Aux>
      <button onClick={() => {this.setState({showCockpit : false })}}> Remove Cockpit</button>
      <AuthContext.Provider
        value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
        {this.state.showCockpit? <Cockpit
          title = {this.props.appTitle} 
          personsLength = {this.state.persons.length}
          login={this.loginHandler}
          showPerson = {this.state.showPerson}
          clicked={this.togglePerson} /> :null}
          {persons}
      </AuthContext.Provider>
    </Aux>
  );
  };
};
export default withClass(App, classes);
