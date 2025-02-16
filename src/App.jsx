import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";
import { TodoItemsContext } from "./Store/todo-items-store";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    setTodoItems([{ name: itemName, duedate: itemDate }]);
  };

  const deleteItem = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMsg />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
