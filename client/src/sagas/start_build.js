import { call, put } from 'redux-saga/effects'
import { requestStartBuildAPI } from '../api/request_start_build_api'
import fetchBuilds from '../actions/fetch_builds'
import startBuildFailed from '../actions/start_build_failed'

export default function* startBuild() {
  try {
    yield call(requestStartBuildAPI)
    yield put(fetchBuilds())
  } catch (e) {
    yield put(startBuildFailed(e.message))
  }
}