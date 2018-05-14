import { takeEvery } from 'redux-saga/effects'
import { START_BUILD_TYPE } from '../constants/types'
import startBuild from './start_build'

export default function* requestStartBuild() {
  yield takeEvery(START_BUILD_TYPE, startBuild)
}