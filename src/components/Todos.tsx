import React, { useContext } from "react";
// import Todo from "../models/todo";
import { TodosContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// const Todos = (props:{items:string[], children}) => {
// const Todos: React.FC<{ items: string[] }> = (props) => {
// const Todos: React.FC<{
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// }> = () => {
//   //FC -> functional component
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
