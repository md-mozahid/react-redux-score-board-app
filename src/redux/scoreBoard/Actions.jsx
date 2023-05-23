export const INCREMENT = 'scoreboard/increment'
export const DECREMENT = 'scoreboard/decrement'
export const ADD = 'scoreboard/add'
export const REMOVE = 'scoreboard/remove'
export const RESET = 'scoreboard/reset'

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  }
}
export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  }
}
export const add = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  }
}

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: state.scores.filter((score) => score.id !== payload.id),
  }
}
