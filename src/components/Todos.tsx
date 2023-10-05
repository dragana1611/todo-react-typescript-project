import React from "react";

// const Todos = (props:{items:string[], children}) => {
const Todos: React.FC<{ items: string[] }> = (props) => {
  //FC -> functional component
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
