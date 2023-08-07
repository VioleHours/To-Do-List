import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';

const List = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    if(!todos || todos.length === 0) {
        return <div>No todos found</div>
    }
  return (
    <ul>
        {todos?.map((todo) => (
            <li key={todo.id}>
                <input type='checkbox' checked={todo.completed} onChange={() => handleToggle(todo.id)} />
                <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.task}</span>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
        ))}
    </ul>
  )
}

export default List;