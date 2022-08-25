import React, { useState } from 'react';
import TodoForm from './components/AddTodo/TodoForm';
import TodoList from './components/Todo/TodoList';

import './App.css';

function App() {
  const [inputText, setInputText] = useState('')
  const [todo, setTodo] = useState([])

  return (
    <div className="container">
      <TodoForm inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
