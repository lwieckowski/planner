import { createContext } from "react";

const storedState = JSON.parse(localStorage.getItem("state"));

export const initialState = storedState || {
  categories: ["All", "Important", "Completed"],
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
    case "TOGGLE_CATEGORY_EDIT_MODE":
      return {
        ...state,
        categoryInEditMode: !state.categoryInEditMode,
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
        category: state.categories.length,
        categoryInEditMode: true,
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
    case "CHANGE_CATEGORY_NAME":
      return {
        ...state,
        categories: state.categories.map((category, index) =>
          index === action.payload.index ? action.payload.name : category
        ),
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (_, index) => index !== action.payload
        ),
        tasks: state.tasks.filter(
          (task) => task.category !== state.categories[action.payload]
        ),
        category:
          state.category === action.payload
            ? 0
            : state.category < action.payload
            ? state.category
            : state.category - 1,
      };
    default:
      return state;
  }
}
