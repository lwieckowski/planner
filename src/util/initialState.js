const storedState = JSON.parse(localStorage.getItem("state"));

export const FIXED_CATEGORIES = ["All", "Important", "Completed", "Active"];

export const initialState = storedState || {
  categories: FIXED_CATEGORIES,
  category: 0,
  categoryInEditMode: false,
  newTaskName: "",
  tasks: [],
};
