import { START_BUILD_FAILED_TYPE } from '../constants/types'

function startBuildFailed(message) {
  return {
    type: START_BUILD_FAILED_TYPE,
    payload: message
  }
}
export default startBuildFailed;