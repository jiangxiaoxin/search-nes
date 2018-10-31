export const INCREASEMENT = 'INCREASEMENT'
export const DECREASEMENT = 'DECREASEMENT'

export function increaseAction(...args) {
  return {
    type: INCREASEMENT,
    value: 1
  }
}

export function decreaseAction(...args) {
  return {
    type: DECREASEMENT,
    value: -1
  }
}


export const CHANGE_A = 'CHANGE_A'
export const CHANGE_B = 'CHANGE_B'
export const RESET = 'RESET'

export function toggleA() {
  return {
    type: CHANGE_A
  }
}

export function toggleB() {
  return {
    type: CHANGE_B
  }
}

export function reset() {
  return {
    type: RESET
  }
}
