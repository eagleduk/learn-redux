import Todos from "../components/Todos";

import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
    
    const  todos = useSelector((state) => (
        state.todos
    ));

    const dispatch = useDispatch();

    // 최적화를 위하여 useCallback 로 감싸준다.
    const onCreate = useCallback((text) => {
        dispatch(addTodo(text));
    }, [dispatch]);
    const onToggle = useCallback((id) => {
        dispatch(toggleTodo(id));
    }, [dispatch])

    return (
        <Todos 
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    )
}

export default TodosContainer;