import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";
import Counter from "../components/Counter"

function CounterContainer() {

    const {number,diff} = useSelector(store => ({
        number: store.counter.number,
        diff: store.counter.diff
    }));

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;