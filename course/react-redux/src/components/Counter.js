import { useSelector, useDispatch } from 'react-redux';
// import redux-toolkit action
import {counterActions} from '../store/index';
import classes from './Counter.module.css';

console.log(counterActions);
const Counter = () => {
  const dispatch = useDispatch();
  // const selector = useSelector();
  // console.log(selector);
  const counterNumber = useSelector((state) => state.counterStore.counter);
  const showToggle = useSelector((state) => state.counterStore.show);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const descrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const counterHandler = (event, opr = 'increase', val=5) => {
    dispatch(counterActions.counter({op:opr, value: val})); //{type: IDENTIFIRE, payload:anyvalue}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle &&<div className={classes.value}>{counterNumber}</div>}
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={descrementCounterHandler}>Descrement Counter</button>
      <button onClick={event => counterHandler(event, 'increase', 10)}>Increase Counter by 10</button>
      <button onClick={event => counterHandler(event, 'descrese', 10)}>Descrese Counter by 10</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
