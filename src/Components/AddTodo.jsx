import { useContext, useRef } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
