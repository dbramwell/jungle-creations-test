import buildsReducer from './reducer_builds'

describe('buildsReducer', () => {

  const builds = {builds: ['build1', 'build2']}

  it('should return action payload when action type is SET_BUILDS', () => {
    const action = {
      type: 'SET_BUILDS',
      payload: builds
    }
    expect(buildsReducer({}, action)).toEqual(builds)
  })

  it('should return state when action type is not recognised', () => {
    const action = {
      type: 'NOT_RECOGNISED',
      payload: builds
    }
    expect(buildsReducer({}, action)).toEqual({})
  })
})