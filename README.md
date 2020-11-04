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