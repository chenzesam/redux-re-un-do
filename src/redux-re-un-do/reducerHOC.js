import { REDO_TYPE, UNDO_TYPE } from './type'

function reUnDoHOC(reducer) {
  let stateStack = []
  let initState = reducer(undefined, {})
  let vernier = -1
  return function (state = initState, action) {
    switch (action.type) {
      case REDO_TYPE:
        vernier -= 1
        return {
          canRedo: vernier !== 0,
          canUndo: vernier !== stateStack.length,
          ...stateStack[vernier]
        }
      case UNDO_TYPE:
        vernier += 1
        return {
          canRedo: vernier !== 0,
          canUndo: vernier !== stateStack.length,
          ...stateStack[vernier]
        }
      default:
        stateStack.push(reducer(state, action))
        vernier++
        return {
          canRedo: vernier !== 0,
          canUndo: vernier !== stateStack.length,
          ...reducer(state, action)
        }
    }
  }
}

export default reUnDoHOC