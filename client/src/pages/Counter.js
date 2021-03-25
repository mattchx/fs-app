import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';
import Header from '../components/Header';
function Counter() {
  const counter = useSelector((state) => state.counter);
  const loggedIn = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div>
        <div>Counter {counter}</div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      {loggedIn && <div>Valuable Information</div>}
      <button onClick={() => dispatch({ type: 'LOG_IN' })}>
        Log me {loggedIn ? 'out' : 'in'}{' '}
      </button>
    </div>
  );
}

export default Counter;
