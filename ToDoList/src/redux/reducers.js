import { combineReducers } from "redux";
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_TODO,
} from "./actions.js";

//acá cada caso lleva su explicación.
const todoReducer = (state = [], action) => {
  switch (action.type) {
    //ADD_TODO: Agrega una nueva tarea, devuelve el estado completo con la tarea nueva agregada al final del array.
    case ADD_TODO:
      return [...state, action.payload];
    //EDIT_TODO: Devuelve un nuevo estado con la tarea actualizada, si el ID coincide, reemplaza la tarea, sino se mantiene la tarea sin cambios.
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload.update : todo
      );
    //DELETE_TODO: Devuelve un nuevo estado con las tareas excepto con la que el ID coincida con el pasado en el payload.
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    //TOGGLE_TODO: Devuelve el estado con todas las tareas, si el ID coincide con el pasado por payload su estado será completo, 
    // si esta marcada como completa, la desmarca y la pone como incompleta y viceversa.
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      //default: va a devolver el estado actual sin ninguna modificación. 
    default:
      return state;
  }
};

//Esto es para un recordatorio de tareas
const reminderReducer = (state = [], action) => {
  switch (action.type) {
    //SET_TODO, devulve un estado con el recordatorio de la tarea que el ID coincida con el pasado por payload.
    // Lo almacena en un objeto donde el id es la clave y el valor es el recordatorio.
    case SET_TODO:
      return { ...state, [action.payload.id]: action.payload.reminder };
    //default: devuelve el estado sin modificación.
    default:
      return state;
  }
};

// esta funcion combina los reducers para que puedan ser manejados por un solo objeto con dos propiedades: 'todo' y 'reminder'
const rootReducer = combineReducers({
  todo: todoReducer,
  reminder: reminderReducer,
});

export default rootReducer;
