import { call } from 'redux-saga/effects'
import { requestStartBuildAPI } from '../api/request_start_build_api'
import getBuilds from './get_builds'

export default function* startBuild() {
  try {
    yield call(requestStartBuildAPI)
  } catch (e) {
    yield put(startBuildFailed(e.message))
  }
}