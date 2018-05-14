import { call } from 'redux-saga/effects'
import { requestStartBuildAPI } from '../api/request_start_build_api'

export default function* startBuild() {
  try {
    yield call(requestStartBuildAPI)
    console.log("Success")
  } catch (e) {
    console.log("Error")
  }
}