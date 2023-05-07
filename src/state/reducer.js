import { createContext } from "react";

const storedState = JSON.parse(localStorage.getItem("state"));

export const initialState = storedState || {
  categories: ["All", "Important", "Completed", "Active"],
  category: 0,
  categoryInEditMode: false,
  newTaskName: "",
  tasks: [],
};

export const Context = createContext(initialState);

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NEW_TASK_NAME":
      return {
        ...state,
        newTaskName: action.payload,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_IMPORTANT":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, important: !task.important }
            : task
        ),
      };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case "SET_TASK_CATEGORY":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, category: action.payload.category }
            : task
        ),
      };
    case "SELECT_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
