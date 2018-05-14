import requestStartBuild from './request_start_build'
import startBuild from './start_build'
import { takeEvery } from 'redux-saga/effects'
import { START_BUILD_TYPE } from '../constants/types'

describe('requestStartBuild saga', () => {

  it('requestStartBuild should fork to startBuild', () => {
    const gen = requestStartBuild();
    expect(gen.next().value).toEqual(takeEvery(START_BUILD_TYPE, startBuild))
  })
})