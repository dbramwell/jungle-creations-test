import fetchBuilds from './fetch_builds'

describe('fetchBuilds', () => {
  it('should create an action to fetch builds', () => {
    const expectedAction = {
      type: 'FETCH_BUILDS'
    }
    expect(fetchBuilds()).toEqual(expectedAction)
  })
})