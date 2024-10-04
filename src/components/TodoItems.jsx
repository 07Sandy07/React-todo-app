import React from "react";
import Todoitem from "./Todoitem";

const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoItems;
