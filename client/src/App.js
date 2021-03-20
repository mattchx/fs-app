import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div>
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

export default App;
