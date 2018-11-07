import { reduxDecoration } from './redux-re-un-do'

const initState = {
  count: 0
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      }
    case 'REDUCE':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default reduxDecoration(reducer)