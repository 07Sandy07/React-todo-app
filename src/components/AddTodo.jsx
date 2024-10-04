import { useState, useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const nameref = useRef();
  const dateref = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = nameref.current.value;
    const dueDate = dateref.current.value;
    nameref.current.value = "";
    dateref.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <form onSubmit={handleAddButtonClick} class="row">
      <div class="col-6">
        <input
          type="text"
          ref={nameref}
          className={styles.itemN}
          placeholder="Enter Todo Here"
        />
      </div>
      <div class="col-4">
        <input type="date" ref={dateref} className={styles.itemN} />
      </div>
      <div class="col-2">
        <button type="submit" class="btn btn-success">
          <MdFormatListBulletedAdd />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
