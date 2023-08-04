// Acá se definen las acciones
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_TODO = "SET_TODO";

// Acá se crean las acciones con esas definiciones que hice.
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const editTodo = (id, update) => ({
  type: EDIT_TODO,
  payload: { id, update },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const setTodo = (id, reminder) => ({
  type: SET_TODO,
  payload: { id, reminder },
});
