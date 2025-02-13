import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onClickFunction }) => {
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
