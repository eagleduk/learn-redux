import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter"

function CounterContainer({
    number,
    diff,
    decrease,
    increase,
    setDiff
}) {

    return (
        <Counter 
            number={number}
            diff={diff}
            onDecrease={decrease}
            onIncrease={increase}
            onSetDiff={setDiff}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        diff: state.counter.diff
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increase,
        decrease,
        setDiff
    }, dispatch);
}
// 객체의 값이 함수 형태이면 bindActionCreators 처럼 connect 에서 자동으로 action 을 만들어준다
// const mapDispatchToProps = {
//     increase,
//     decrease,
//     setDiff
// }

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer);