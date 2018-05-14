import startBuild from './start_build'

describe('startBuild', () => {
  it('should create an action to start build', () => {
    const expectedAction = {
      type: 'START_BUILD'
    }
    expect(startBuild()).toEqual(expectedAction)
  })
})