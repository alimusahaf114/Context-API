import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./Components/WelcomeMsg";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // const newTodoItems = [...todoItems, { name: itemName, duedate: itemDate }];
    setTodoItems((curVal) => [
      ...curVal,
      { name: itemName, duedate: itemDate },
    ]);
  };

  const handleOnDeletion = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg />}
      <TodoItems
        todoItems={todoItems}
        had
        onClickFunction={handleOnDeletion}
      ></TodoItems>
    </center>
  );
}

export default App;
