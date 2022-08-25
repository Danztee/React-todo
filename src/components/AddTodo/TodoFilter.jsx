import React from "react";

import "./TodoFilter.css";

function TodoFilter() {
  return (
    <div>
      <select name="" id="select">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default TodoFilter;
