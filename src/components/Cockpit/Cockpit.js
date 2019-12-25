import React from 'react';

import './Cockpit.css';

const cockpit = (props) => {
  const styles = {
    button: {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "solid 1px blue",
      padding: "8px",
      cursor: "pointer",
      fontSize: "25px",
      width: "150px",
      '&:hover': {
        backgroundColor: '#5dc95d',
      },   
    }
  };
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push('red')
  };
  if (props.persons.length <= 1) {
    classes.push('bold');
  };
  if (props.showPerson) {
    styles.button.backgroundColor = "red";
  }
  return <div>
    <h1>Hi, I am React App</h1>
    <p className={classes.join(' ')}>This is really working</p>
    <button
      style={styles.button}
      onClick={props.clicked}
    >Switch</button>
  </div>
};
export default cockpit;