import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../redux/actions";
import PropTypes from 'prop-types';

const Reminder = ({ todoId }) => {
  //Defino el estado local todo con valor inicial vacío.
  const [todo, setTodoState] = useState("");
  const dispatch = useDispatch();

  //manejo de envio del formulario, previniendo el error y si el campo está vacío, no hace nada. 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    //Llama a la acción 'setTodo' el todoId y el contenido del campo de la tarea, luego setea el campo y lo vacía.
    dispatch(setTodo(todoId, todo));
    setTodoState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* El input controlado muestra el contenido del campo de tarea y actualiza el estado 'todo' en cada cambio */}
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodoState(e.target.value)}
      />
       {/* El botón 'Set Todo' envía el formulario cuando se hace clic, lo que dispara 'handleSubmit' */}
      <button type="submit">Set Todo</button>
    </form>
  );
};

// Define la prop 'todoId' como un string requerido
Reminder.propTypes = {
  todoId: PropTypes.string.isRequired, 
};

export default Reminder;
