// import { reduxDecoration } from './redux-re-un-do'

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
    case 'RE_DO':
      return {
        ...state,
        ...action.payload.counter
      }
    case 'UN_DO':
      return {
        ...state,
        ...action.payload.counter
      }
    // case 'ADD_RE_DO':
    //   return {
    //     ...state,
    //     count: state.count - 1
    //   }
    // case 'ADD_UN_DO':
    //   return {
    //     ...state,
    //   }
    default:
      return state
  }
}

// export default reduxDecoration(reducer)
export default reducer