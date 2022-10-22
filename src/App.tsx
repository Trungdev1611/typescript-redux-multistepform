import { useAppSelector, useAppDispatch } from './reduxtoolkit/hooksredux'
import { increment, decrement, amount, reset } from './reduxtoolkit/counterSlice'
import IndexMulti from './multiStepform';
function App() {
  const selector = useAppSelector(state => state)
  const dispatch = useAppDispatch()
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h2>Redux toolkit - Typescript</h2>
      <h2>{selector.count}</h2>
      <div>
        <p>Cac option counter</p>
        <button onClick={() => dispatch(increment(100))}>Increment</button>
        <button onClick={() => dispatch(decrement(100))}>Decrement</button>
        <button onClick={() => dispatch(amount(10))}>+10</button>
        <button onClick={() => dispatch(reset(10))}>Reset</button>
      </div>
      <div style={{
        border: '1px solid black', borderRadius: '10px',
        maxWidth: '800px', minHeight: '200px', marginTop: '20px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <IndexMulti />
      </div>
    </div>
  );
}

export default App;
