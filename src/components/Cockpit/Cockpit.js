import React, {useEffect} from 'react';

import './Cockpit.css';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud!');
    },1000);
    return () => {
      console.log('[Cockpit.js] useEffect to cleanup work');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd useEffect to cleanup work');
    }
  });  
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
  if (props.personsLength <= 2) {
    classes.push('red')
  };
  if (props.personsLength <= 1) {
    classes.push('bold');
  };
  if (props.showPerson) {
    styles.button.backgroundColor = "red";
  }
  return <div>
    <h1>{props.title}</h1>
    <p className={classes.join(' ')}>This is really working</p>
    <button
      style={styles.button}
      onClick={props.clicked}
    >Switch</button>
  </div>
};
export default React.memo(Cockpit);