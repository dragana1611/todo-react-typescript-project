import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

// const Todos = (props:{items:string[], children}) => {
// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  //FC -> functional component
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} todoText={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
