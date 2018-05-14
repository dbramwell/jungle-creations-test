import setBuilds from '../actions/set_builds'
import fetchBuildsFailed from '../actions/fetch_builds_failed'
import { put, call } from 'redux-saga/effects'
import { fetchBuilds } from '../api/builds_api'

export default function* getBuilds() {
  try {
    const response = yield call(fetchBuilds)
    const builds = yield call([response, response.json])
    yield put(setBuilds(builds))
  } catch (e) {
    yield put(fetchBuildsFailed(e.message))
  }
}