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