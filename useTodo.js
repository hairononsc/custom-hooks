import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer";
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodo = () => {
  const initialState = [];

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    return () => {};
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };
  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodoCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggle,
  };
};
