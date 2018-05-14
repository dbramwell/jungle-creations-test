import getBuilds from './get_builds'
import { call, put } from 'redux-saga/effects'
import { fetchBuilds } from '../api/builds_api'
import setBuilds from '../actions/set_builds'

describe('getBuilds saga', () => {

  const gen = getBuilds();

  it('getBuilds should call fetchBuilds', () => {
    expect(gen.next().value).toEqual(call(fetchBuilds))
  })

  it('getBuilds should return json from fetch response', () => {
    const response = {json: () => {builds: ['build1', 'build2']}}
    expect(gen.next(response).value).toEqual(call([response, response.json]))
  })

  it('getBuilds should call action to set builds', () => {
    const builds = {builds: ['build1', 'build2']}
    expect(gen.next(builds).value).toEqual(put(setBuilds(builds)))
  })
})