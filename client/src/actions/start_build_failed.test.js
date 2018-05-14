import startBuildFailed from './start_build_failed'

describe('startBuildFailed', () => {
  it('should create an action to show build start failed', () => {
    const message = 'Cannot start build'
    const expectedAction = {
      type: 'START_BUILD_FAILED',
      payload: message
    }
    expect(startBuildFailed(message)).toEqual(expectedAction)
  })
})