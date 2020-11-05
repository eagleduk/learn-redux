import Todos from "../components/Todos";

import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
    
    const { todos } = useSelector(state => ({
        todos: state.todos
    }));

    const dispatch = useDispatch();

    const onClick = (text) => {
        console.log(text);
        dispatch(addTodo(text));
    }
    const onToggle = (id) => {
        dispatch(toggleTodo(id));
    }

    return (
        <Todos 
            todos={todos}
            onClick={onClick}
            onToggle={onToggle}
        />
    )
}

export default TodosContainer;