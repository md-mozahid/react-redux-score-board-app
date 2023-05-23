import { createStore } from 'redux'
import scoreBoardReducer from './scoreBoard/ScoreBoardReducer'

const store = createStore(scoreBoardReducer)

export default store
