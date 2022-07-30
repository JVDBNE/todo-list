import React, { useState } from "react";
import './App.css';
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {

  const [todos, setTodos] = useState([
    {
    text: "Learn about React",
    isCompleted: false,
    },
    {
    text: "Meet friend for lunch",
    isCompleted: false,
    },
    {
    text: "Build really cool todo app",
    isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);};

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div className="todo-list">
    <h1>My To Do List</h1>
    {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index}
    completeTodo={completeTodo} />)
    )
  }
  <TodoForm addTodo={addTodo} />
  </div>
  </div>
  );
  
}

export default App;


