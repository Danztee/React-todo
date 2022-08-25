import React from 'react';
import TodoFilter from './TodoFilter';

import './TodoForm.css';

function TodoForm({ setInputText, todo, setTodo, inputText }) {
  const todoChangeHandler = e => {
    setInputText(e.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputText('');
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        value={inputText}
        onChange={todoChangeHandler}
        className="input"
      />
      <button className="icon">+</button>
      <TodoFilter></TodoFilter>
    </form>
  );
}

export default TodoForm;
