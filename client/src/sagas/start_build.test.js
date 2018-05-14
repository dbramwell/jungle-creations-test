import startBuild from './start_build'
import { call, put } from 'redux-saga/effects'
import { requestStartBuildAPI } from '../api/request_start_build_api'

describe('getBuilds saga', () => {

  const gen = startBuild();

  it('startBuild should call requestStartBuild', () => {
    expect(gen.next().value).toEqual(call(requestStartBuildAPI))
  })
})