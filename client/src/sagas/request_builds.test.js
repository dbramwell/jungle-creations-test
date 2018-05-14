import getBuilds from './get_builds'
import request_builds from './request_builds'
import { takeEvery } from 'redux-saga/effects'
import fetchBuilds from '../actions/fetch_builds'

describe('fetchBuilds saga', () => {

  const gen = request_builds();

  it('fetchBuilds should fork to getBuilds', () => {
    expect(gen.next().value).toEqual(takeEvery(fetchBuilds().type, getBuilds))
  })
})