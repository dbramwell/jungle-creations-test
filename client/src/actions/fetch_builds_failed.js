import { FETCH_BUILDS_FAILED_TYPE } from '../constants/types'

function fetchBuildsFailed(message) {
  return {
    type: FETCH_BUILDS_FAILED_TYPE,
    payload: message
  }
}
export default fetchBuildsFailed;