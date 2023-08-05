import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4} from 'uuid';
import { addTodo } from '../redux/actions';

const Form = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;

        const newTodo = {
            id: uuidv4(),
            task,
            completed: false,
        };

        dispatch(addTodo(newTodo));
        setTask('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type='submit'>Add new Task</button>
        </form>
    );
};

export default Form;