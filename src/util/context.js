import { createContext } from "react";
import { INITIAL_STATE } from "./constants";

export const Context = createContext(INITIAL_STATE);

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
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        auth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        auth: false,
      };
    case "LOAD_STORED_STATE":
      const storedState = JSON.parse(localStorage.getItem("state"));
      return storedState ? storedState : INITIAL_STATE;
    case "RESET_STATE":
      return INITIAL_STATE;
    default:
      return state;
  }
}
