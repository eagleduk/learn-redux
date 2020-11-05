import React, {useState} from "react";

// input 값을 입력할때 랜더링을 방지하기 위하여 React.memo 로 감싸준다.
const TodoItem = React.memo(function TodoItem({ todo, onToggle}) {
    return (
        <li 
            onClick={() => onToggle(todo.id)}
            style={{
                "text-decoration": todo.done ? "line-through" : "none"
            }}
        >
            {todo.text}
        </li>
    );
})

// input 값을 입력할때 랜더링을 방지하기 위하여 React.memo 로 감싸준다.
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {
            todos.map(todo => 
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                />
            )
            }
            
        </ul>
    )
})

function Todos({ todos, onCreate, onToggle }) {

    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText("");
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder="input todo"/>
                <button type="submit">등록</button>
            </form>
            <TodoList 
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    )
}

export default React.memo(Todos);