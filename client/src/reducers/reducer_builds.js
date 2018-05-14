import { SET_BUILDS_TYPE } from '../constants/types'

export default function(state = null, action) {
  switch (action.type) {
    case SET_BUILDS_TYPE:
      return action.payload
    default:
     return state
  }
}