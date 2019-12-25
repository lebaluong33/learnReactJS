import React from "react";
import Person from "./Person/Person";
const persons = (props) => props.persons.map((item, index) => {
  return <Person
    key={item.id}
    name={item.name}
    age={item.age}
    click={() => props.clicked(index)}
    change={(event) => props.changed(event, item.id)} />
});
export default persons;