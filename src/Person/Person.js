import React from 'react';
import './person.css';
const person = (props) =>{
  return(
    <div className="person">
      <p onClick={props.clicked}> Hello, I am {props.name} , I am {props.age} yearsold!</p>
      <input type="text" onChange={props.changed} value={props.name} ></input>
    </div>
  );
}
export default person;