// 액션 타입
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 변수
let nextId = 1;

// 액션 생성 함수
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

// 초기값
const initialState = [
    /*
    {
        id: #,
        text: "$",
        done: true/false
    }
    */
];

// 리듀서
export default function todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo) => 
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        default:
            return state;
    }
};