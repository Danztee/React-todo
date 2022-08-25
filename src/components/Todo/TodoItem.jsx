import React from 'react';

import './TodoItem.css';

const TodoItem = ({ text, todo, setTodo, eachTodo }) => {
  const deleteHandler = () => {
    setTodo(todo.filter(el => el.id !== eachTodo.id));
  };

  const completedHandler = () => {
    setTodo(
      todo.map(item => {
        if (item.id === eachTodo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <li className="card">
      <h5 className={`${eachTodo.completed ? 'completed' : ''}`}>{text}</h5>
      <div className="btn-container">
        <button className="btn done" onClick={completedHandler}>
          &#10003;
        </button>
        <button className="btn del" onClick={deleteHandler}>
          &#10005;
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
