import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counter/counterReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  counter: counterReducer,
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
