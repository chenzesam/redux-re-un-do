import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './counter/counterReducer'
import reUnDoReducer from './middleware/reducer'

import reUnDo  from './middleware/redux-re-un-do'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  counter: counterReducer,
  reUnDo: reUnDoReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reUnDo))
)

export default store
