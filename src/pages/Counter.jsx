import { useSelector, useDispatch } from "react-redux"
import { decreaceCount, increaceCount } from "../store/countReducer"

export default function Counter() {
  const num = useSelector(state => state.count.num)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(increaceCount())
  }

  const decrease = () => {
    dispatch(decreaceCount())
  }

  return (
    <div className="wrapper">
      <div className="counter">
        <button onClick={decrease}>-</button>
        <p>Counter: {num}</p>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}
