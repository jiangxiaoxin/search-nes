import { ADD_ONE, MINUS_ONE } from './action'

import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case ADD_ONE:
    case MINUS_ONE:
      return state + action.value
    default:
      return state
  }
}

const rootReducer = combineReducers({
  currCount: counterReducer
})

export default rootReducer

