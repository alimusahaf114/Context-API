import styles from "./WelcomeMsg.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}> Enjoy your Day bro</p>
    )
  );
};

export default WelcomeMsg;
