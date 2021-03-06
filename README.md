https://react.vlpt.us/redux/

** 규칙
 - 하나의 애플리케이션엔 하나의 스토어만
 - 상태는 읽기전용
 - 변화를 일으키는 함수 리듀서는 순수한 함수여야만 한다
  => 동일한 인풋 -> 동일한 아웃풋

1. 개발환경 설정
 - yarn add redux

2. 기본 예제 (exercise.js)
 - 초기 상태 설정
 - action type 정의
 - action type 에 대한 action 함수 정의
 - action type 에 대한 수행 작업 정의 => reducer
 - reducer 로 store 생성
 - 구독(subscribe) => 구독을 한 후에 구독 취소를 할 수 있다. 구독을 action 을 수행할 때마다 실행되는 함수를 파라메터로 정의 할 수 있다.
 - store 실행
 - 구독 취소(unsubscribe)

3. 리덕스 모듈 만들기
 - 액션 타입, 액션 생성 함수, 리듀서
 - 모듈이 여러개 일때는 combineReducers 를 사용하여 rootReducer 를 만들어서 export 해준다.
 - 리액트에서 리덕스를 실행하려면 react-redux 를 설치해야 한다.
 - app.js 에서 react-redux 의 Provider 를 호출하여 store 생성 후에 인자로 넣어준다.

4. 카운터 구현
 - 프리젠테이셔널 컴포넌트 => 필요한 props 만 받아와서 화면에 출력하는 UI 를 선언하는 역할
 - 컨테이너 컴포넌트 => 상태관리, 액션 처리등을 한다.

5. 리덕스 개발자 도구
 - 크롬 확장 프로그램 Redux DevTools
 - yarn add redux-devtools-extension

6. 할일 목록 구현
 - 혼자 스스로 구현 해봄 동작은 정상적으로 동작..
 - 혼자 한거랑 크게 다를거 없음... 최적화만 추가..

7. useSelector 최적화
 - useSelector 를 사용하여 state 안에 있는 객체의 값을 가져올때 최적화는
  a. 각각 하나씩 useSelector 를 사용하여 값을 가져온다
  b. useSelector 의 두번 쨰 파라메터 함수에서 (left,right) 를 각각 비교한다.
  c. useSelector 의 두번 째 파라메터에 shallowEqual 를 추가한다.
 - 하지만 모든 게 정답은 아니다. 각각 상황에 맞게 사용할것.

8. connect, HOC 를 사용하여 class 컴포넌트에서 Redux 사용
 - connect 는 hook 과는 다르게 모두다 Props 로 넘겨주어야 한다.
 - 그래서 hook 이 awesome 이구나.