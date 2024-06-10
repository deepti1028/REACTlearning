import { useContext, createContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      task: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
//useContext me functions ke kewal naam likthe hai not definitions
