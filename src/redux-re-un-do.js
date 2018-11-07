import store from './store'

const initState = {
  hasPreAction: false,
  hasNextAction: false
}
const reUnDoStack = []
let vernier = 0

const reducer = (state = initState, action) => {
  switch (action.type) {
    // 撤回上一步
    case 'RE_DO':
      let preAction = reUnDoStack[--vernier]
      store.dispatch({
        type: preAction.type
      })
      return {
        ...state,
        hasPreAction: vernier !== 0 ? true : false,
        hasNextAction: (vernier === 0 && reUnDoStack.length !== 0) ? true : false
      }
    // 倒回下一步
    case 'UN_DO':
      let nextAction = reUnDoStack(++vernier)
      store.dispatch({
        type: nextAction.type
      })
      return {
        ...state,
        hasPreAction: vernier !== 0 ? true : false,
        hasNextAction: (vernier === 0 && reUnDoStack.length !== 0) ? true : false
      }
    default:
      return {
        ...state,
        hasPreAction: vernier !== 0 ? true : false,
        hasNextAction: (vernier === 0 && reUnDoStack.length !== 0) ? true : false
      }
  }
}

const reduxDecoration = (reducer) => {
  return (state, action) => {
    reUnDoStack.push(action)
    vernier = reUnDoStack.length
    return reducer(state, action)
  }
}

export {
  reduxDecoration,
  reducer
}