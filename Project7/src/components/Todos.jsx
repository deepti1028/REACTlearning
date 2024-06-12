import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/tosoSlice";
function Todos() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return;
  <>
    <div>Todos:</div>;
    {todoList.map((todo) => {
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
      </li>;
    })}
  </>;
}

export default Todos;
