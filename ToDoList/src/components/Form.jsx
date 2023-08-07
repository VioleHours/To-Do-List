import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/actions";

const Form = () => {
  //Defino el estado local con un valor inicial vacío.
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  //Funcion para manejar el envio del formulario, evitando el error y si el campo de la tarea está vacío no hace nada.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    //En caso de que no esté vacío, le asigna como ID unico con UUIDV4, asigna el contenido al atributo task y lo define como incompleto.
    const newTodo = {
      id: uuidv4(),
      task,
      completed: false,
    };

    //Llama al addTodo con el nuevo atributo y limpia el campo seteando el task a vacío.
    dispatch(addTodo(newTodo));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* El input controlado muestra el contenido del campo de tarea y actualiza el estado 'task' en cada cambio */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* El botón 'Add new Task' envía el formulario cuando se hace clic, lo que dispara 'handleSubmit' */}
      <button type="submit">Add new Task</button>
    </form>
  );
};

export default Form;
