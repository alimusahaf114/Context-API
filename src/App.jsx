import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import WelcomeMsg from "./Components/WelcomeMsg";
import TodoItemsContextProvider from "./Store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
