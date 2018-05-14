import { all } from 'redux-saga/effects'
import getData from './request_builds'

export default function* rootSaga() {
  yield all([
    getData()
  ])
}