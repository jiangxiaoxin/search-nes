import { takeLatest, put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { ADD_ONE, MINUS_ONE, ADD_ONE_ASYNC } from './action'

export default function* rootSaga() {
  yield takeLatest(ADD_ONE_ASYNC, addOneHandler)
  yield takeLatest(MINUS_ONE, minusOneHandler)
}

function* addOneHandler(...args) {
  yield call(delay, 2000)
  yield put({type: ADD_ONE, value: args[0].value})
}

function* minusOneHandler() {
  yield console.log('minusOneHandler');
}