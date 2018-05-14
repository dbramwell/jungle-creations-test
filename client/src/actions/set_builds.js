import { SET_BUILDS_TYPE } from '../constants/types'

function setBuilds(builds) {
  return {
    type: SET_BUILDS_TYPE,
    payload: builds
  }
}
export default setBuilds;