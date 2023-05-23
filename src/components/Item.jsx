import { useState } from 'react'
import { useDispatch } from 'react-redux'
import deleteIcon from '../assets/img/delete.svg'
import { decrement, increment } from '../redux/scoreBoard/Actions'
import Footer from './Footer'

const Item = () => {
  const [inputVal, setInputVal] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(increment(inputVal))
    dispatch(decrement(inputVal))
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
    <>
      <div className="match">
        <div className="wrapper">
          <button className="lws-delete">
            <img src={deleteIcon} alt="" />
          </button>
          <h3 className="lws-matchName">Match 1</h3>
        </div>
        <div className="inc-dec">
          <p>{}</p>
          <form className="incrementForm" onSubmit={handleSubmit}>
            <h4>Increment</h4>
            <input
              type="number"
              name="increment"
              className="lws-increment incrementVal"
              onChange={handleChange}
            />
          </form>
          <form className="decrementForm" onSubmit={handleSubmit}>
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
          <h2 className="lws-singleResult totalResult">{}</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Item
