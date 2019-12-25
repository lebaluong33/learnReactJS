import React from 'react';
import './person.css';
const person = (props) =>{
  return(
    <div className="person">
      <p onClick={props.click}> Hello, I am {props.name} , I am {props.age} yearsold!</p>
      <input className="name" type="text" onChange={props.change} value={props.name}></input>
    </div>
  );
}
export default person;