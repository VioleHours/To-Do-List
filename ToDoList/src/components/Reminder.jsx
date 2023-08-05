import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTodo } from "../redux/actions";
import PropTypes from 'prop-types';

const Reminder = ({ todoId }) => {
  const [todo, setTodoState] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    dispatch(setTodo(todoId, todo));
    setTodoState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodoState(e.target.value)}
      />
      <button type="submit">Set Todo</button>
    </form>
  );
};

Reminder.propTypes = {
  todoId: PropTypes.string.isRequired, 
};

export default Reminder;
