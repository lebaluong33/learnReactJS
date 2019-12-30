import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
const classes='person';
class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render(){
  console.log('[Person.js] Rendering...');
  return(
    <Aux>
      {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login!</p>}
      <p key="i2"
      onClick={this.props.click}> 
      Hello, I am {this.props.name} , I am {this.props.age} yearsold!
      </p>
      <input 
        key="i3"
        ref={this.inputElementRef}
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