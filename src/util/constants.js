export const MOBILE_WIDTH = 600;
export const MOBILE_HEIGHT = 1000;
export const FIXED_CATEGORIES = ["All", "Important", "Completed", "Active"];

export const INITIAL_STATE = {
  categories: FIXED_CATEGORIES,
  category: 0,
  categoryInEditMode: false,
  newTaskName: "",
  tasks: [],
  theme: "light",
  auth: false,
};
