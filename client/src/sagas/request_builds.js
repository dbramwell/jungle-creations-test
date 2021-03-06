import { takeEvery } from 'redux-saga/effects'
import { FETCH_BUILDS_TYPE } from '../constants/types'
import getBuilds from './get_builds'

export default function* requestBuilds() {
  yield takeEvery(FETCH_BUILDS_TYPE, getBuilds)
}