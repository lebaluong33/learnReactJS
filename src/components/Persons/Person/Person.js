import React, { Component } from 'react';
import './person.css';
class Person extends Component {
  render(){
  console.log('[Person.js] Rendering...');
  return(
    <div className="person">
      <p onClick={this.props.click}> Hello, I am {this.props.name} , I am {this.props.age} yearsold!</p>
      <input className="name" type="text" onChange={this.props.change} value={this.props.name}></input>
    </div>
  );
  }
}
export default Person;