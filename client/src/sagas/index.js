import { all } from 'redux-saga/effects'
import requestBuilds from './request_builds'
import startBuild from './request_start_build'
import getBuilds from './get_builds'

export default function* rootSaga() {
  yield all([
    getBuilds(),
    startBuild(),
    requestBuilds()
  ])
}