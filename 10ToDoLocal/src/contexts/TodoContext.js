import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //default value just for visualization
  // an array for storing todo objects
  todos: [
    {
      id: 1, //unique id
      todo: " Todo msg", //todo message
      completed: false, //task completed?
    },
  ],

  // these functions are just placeholders, they will be implemented in the provider component in App.jsx
  addTodo: (todo) => {}, //function to add todo
  updateTodo: (id, todo) => {}, //function to update todo
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}, //function to toggle complete
});

//custom hook to use the context, this will be used in the components to access the context values and functions
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider; //exporting the provider component to wrap around the app in App.jsx
