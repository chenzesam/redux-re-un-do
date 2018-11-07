import { createStore, combineReducers } from 'redux'
import counterReducer from './counterReducer'
import { reducer as reUndoReducer } from './redux-re-un-do'

const rootReducer = combineReducers({
  counter: counterReducer,
  reUnDo: reUndoReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
