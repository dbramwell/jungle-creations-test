import { combineReducers } from 'redux'
import BuildsReducer from './reducer_builds'

const rootReducer = combineReducers({
  builds: BuildsReducer
});
export default rootReducer;