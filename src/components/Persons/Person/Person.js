import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

const classes='person';
class Person extends Component {
  render(){
  console.log('[Person.js] Rendering...');
  return(
    <Aux>
      <p key="i2"
      onClick={this.props.click}> 
      Hello, I am {this.props.name} , I am {this.props.age} yearsold!
      </p>
      <input key="i3"
        className="name" 
        type="text" 
        onChange={this.props.change} 
        value={this.props.name}
      ></input>
    </Aux>
  );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age:  PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, classes);