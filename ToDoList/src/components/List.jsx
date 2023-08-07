import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";

const List = () => {
  //Obtener el estado 'todo' del store de Redux.
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  //Funcion para manejar la eliminación de tareas, utiliza el ID para pasarle a la accion del deleteTodo mediante el dispatch.
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  //Función para manejar el evento de cambiar a complete una tarea, tambien utiliza el ID para pasarle al toggleTodo.
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  //Si en la lista no hay tareas o está vacía. Retorna un mensaje que dice que no se encontraron tareas.
  if (!todos || todos.length === 0) {
    return <div>No todos found</div>;
  }
  return (
    <ul>
      {/* Acá itera sobre la lista de tareas utilizando un 'map' y renderiza cada tarea en un <li> */}
      {todos?.map((todo) => (
        <li key={todo.id}>
          {/* Renderiza un checkbox para marcar el estado de completado de la tarea. Llama a 'handleToggle' cuando cambia */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          {/* Renderiza el nombre de la tarea. Si está completada, se agrega la decoración de 'line-through' */}
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </span>
          {/* Renderiza un botón 'Delete' para eliminar la tarea. Llama a 'handleDelete' cuando se hace clic */}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
