import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // setTodoItems((currentValue)=>{
    //   const newTodoItems=[...currentValue,{name:itemName ,dueDate:itemDueDate}];
    //   return newTodoItems;
    // });

    setTodoItems((currentValue) => [
      ...currentValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg />}

      <TodoItems todoItems={todoItems} onDelete={handleDeleteItems} />
    </center>
  );
}

export default App;
