export const ADD_ONE = 'ADD_ONE'
export const MINUS_ONE = 'MINUS_ONE'
export const ADD_ONE_ASYNC = 'ADD_ONE_ASYNC'


export function addOne() {
  return {
    type: ADD_ONE,
    value: 1
  }
}

export function minusOne() {
  return {
    type: MINUS_ONE,
    value: -1
  }
}

export function addOneAsync() {
  return {
    type: ADD_ONE_ASYNC,
    value: 1
  }
}