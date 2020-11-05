import {useState} from "react";
function TodoItem({ id, text, done, onToggle}) {
    return (
        <li 
            onClick={() => onToggle(id)}
            style={done ? {"text-decoration": "line-through"} : {}
                }
        >
            {text}
        </li>
    );
}

function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {
            todos.map(todo => 
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    onToggle={onToggle}
                />)
            }
            
        </ul>
    )
}

function Todos({ todos, onClick, onToggle }) {

    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange}/>
            <button onClick={() => onClick(value)}>등록</button>
            <TodoList 
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    )
}

export default Todos;