import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter!</h1>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  );
}
