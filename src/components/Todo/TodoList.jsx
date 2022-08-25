import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todo, setTodo }) => {
  return (
    <ul style={{ marginRight: '3rem', marginTop: '4rem' }}>
      {todo.map(eachTodo => (
        <TodoItem
          setTodo={setTodo}
          key={eachTodo.id}
          eachTodo={eachTodo}
          text={eachTodo.text}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
