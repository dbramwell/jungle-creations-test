import { all } from 'redux-saga/effects'
import getBuilds from './request_builds'
import startBuild from './request_start_build'

export default function* rootSaga() {
  yield all([
    getBuilds(),
    startBuild()
  ])
}