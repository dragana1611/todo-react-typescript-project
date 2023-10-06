import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todo-context";
import Header from "./components/Header";

function App() {
  

  return (
    <TodosContextProvider>
      <Header/>
      <NewTodo/>
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
