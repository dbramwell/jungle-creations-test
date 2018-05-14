import { FETCH_BUILDS_TYPE } from '../constants/types'

function fetchBuilds() {
  return {
    type: FETCH_BUILDS_TYPE
  }
}
export default fetchBuilds;