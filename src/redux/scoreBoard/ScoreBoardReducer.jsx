import { ADD, DECREMENT, INCREMENT, REMOVE } from './Actions'

const initialState = {
  value: 0,
  scoreBoards: [],
}

const scoreBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      }
    case ADD:
      return {
        ...state,
        scoreBoards: {
          ...state.scoreBoards,
          ...action.payload,
          //   value: state.value + action.payload,
        },
      }
    case REMOVE:
      return {
        ...state,
        scoreBoards: {
          ...state.scoreBoards,
          ...action.payload,
          //   value: state.value + action.payload,
        },
      }
  }
}
export default scoreBoardReducer
