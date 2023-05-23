import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deleteIcon from '../assets/img/delete.svg'
import { decrement, increment } from '../redux/scoreBoard/Actions'

const Item = () => {
  const [inputVal, setInputVal] = useState('')
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.value)
  console.log(selector)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(increment(inputVal.increment))
    dispatch(decrement(inputVal.decrement))
  }

  const handleChange = (e) => {
    e.preventDefault()
    setInputVal((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <div className="match">
      <div className="wrapper">
        <button className="lws-delete">
          <img src={deleteIcon} alt="" />
        </button>
        <h3 className="lws-matchName">Match 1</h3>
      </div>
      <div className="inc-dec">
        <form className="incrementForm" onSubmit={handleSubmit}>
          <h4>Increment</h4>
          <input
            type="number"
            name="increment"
            className="lws-increment incrementVal"
            onChange={handleChange}
          />
        </form>
        <form className="decrementForm">
          <h4>Decrement</h4>
          <input
            type="number"
            name="decrement"
            className="lws-decrement decrementVal"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="numbers">
        <h2 className="lws-singleResult totalResult">0</h2>
      </div>
    </div>
  )
}

export default Item
