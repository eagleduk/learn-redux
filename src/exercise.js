import { createStore } from "redux";

const initialState = {
    counter: 0,
    text: "",
    list: []
}

// action Type 설정
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST= "ADD_TO_LIST";

// action 생성 함수 설정
const increase = () => ({
    type: INCREASE
});

const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// Reducer
// Redux 에서는 처음 호출시 reducer 를 호출하여 초기값을 받아야 함으로, state 의 default 값을 지정해 주어야 한다.
function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

// 구독
const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);
// 구독 취소
// unsubscribe();

// 액션 실행 dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("Hello"));
store.dispatch(addToList({ id:1, text:"Hello"}));

// Browser 콘솔에서 여기에서 만든 store 를 사용가능 하다.
// store.dispatch({type:"INCREASE"});
// store.dispatch({type:"CHANGE_TEXT", text:"BYE"});
window.store = store;

// 구독을 취소해도 state 는 변경되지만 listener 는 동작하지 않는다.
window.unsubscribe = unsubscribe;