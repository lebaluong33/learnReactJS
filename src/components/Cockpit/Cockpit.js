import React, {useEffect, useRef} from 'react';

import './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnClick = useRef();
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // },1000);
    toggleBtnClick.current.click();
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
      ref={toggleBtnClick}
      style={styles.button}
      onClick={props.clicked}
    >Switch</button>
    <AuthContext.Consumer>
    {(context) => <button 
    onClick={context.login}
    style={styles.button}
    >Login</button>}
    </AuthContext.Consumer>
  </div>
};
export default React.memo(Cockpit);