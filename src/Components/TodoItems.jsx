import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = ({ onClickFunction }) => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div id="item-container">
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.duedate}
            todoName={item.name}
            key={(item.name, item.duedate)}
            onClickFunction={onClickFunction}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
