import setBuilds from './set_builds'

describe('setBuilds', () => {
  it('should create an action to set builds', () => {
    const builds = {builds: ['build1', 'build2']}
    const expectedAction = {
      type: 'SET_BUILDS',
      payload: builds
    }
    expect(setBuilds(builds)).toEqual(expectedAction)
  })
})