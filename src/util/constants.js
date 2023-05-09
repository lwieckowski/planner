export const MOBILE_PX = 599;
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
