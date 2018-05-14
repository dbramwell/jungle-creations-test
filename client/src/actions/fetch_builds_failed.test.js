import fetchBuildsFailed from './fetch_builds_failed'

describe('fetchBuildsFailed', () => {
  it('should create an action to show builds fetch failed', () => {
    const message = 'Cannot fetch builds'
    const expectedAction = {
      type: 'FETCH_BUILDS_FAILED',
      payload: message
    }
    expect(fetchBuildsFailed(message)).toEqual(expectedAction)
  })
})