import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    todos: [{ id: 1, title: "Todo 1", completed: false }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }, 
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
