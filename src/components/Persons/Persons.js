import React, { PureComponent } from "react";
import Person from "./Person/Person";
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons)
  //   return true;
  //   else {
  //     return false;
  //   } 
  // }

  getSnapshotBeforeUpdate(prevProps, PrevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message : "Snapshot!"};
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }
  render() { 
    console.log('[Persons.js] Rendering...');
    return this.props.persons.map((item, index) => {
      return <Person
        key={item.id}
        name={item.name}
        age={item.age}
        click={() => this.props.clicked(index)}
        change={(event) => this.props.changed(event, item.id)} />
    });
  }
};
export default Persons;