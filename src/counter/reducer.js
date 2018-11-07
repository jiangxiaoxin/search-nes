import { INCREASEMENT, DECREASEMENT, CHANGE_A, CHANGE_B, RESET } from './action'

import { combineReducers } from 'redux'

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREASEMENT:
    case DECREASEMENT:
      return state + action.value
    default:
      return state
  }
}

const initState = { name: 'mike', age: 18 }

const anotherReducer = (state = initState, action) => {
  console.log('anotherReducer', action.type)
  switch(action.type) {
    case CHANGE_A:
      return {...state, name: 'a', age: 20}
    case CHANGE_B:
      return {...state, name: 'b', age: 100}
    case RESET:
      return initState
    default:
       return state
  }
}

const rootReducer = combineReducers({
  count: counterReducer,
  another: anotherReducer
})

export default rootReducer

