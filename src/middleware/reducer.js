const initState = {
  hasPreAction: false,
  hasNextAction: false
}
const vernier = 0
const stateStack = []

const reducer = (state = initState, action) => {
  switch (action.type) {
    // 撤销, 回到上一步
    case 'RE_DO':
      return {
        ...state,
        hasPreAction: vernier !== 0 ? true : false,
        hasNextAction: (vernier === 0 && stateStack.length !== 0) ? true : false
      }
    // 还原, 到下一步
    case 'UN_DO':
      return {
        ...state,
        hasPreAction: vernier !== 0 ? true : false,
        hasNextAction: (vernier === 0 && stateStack.length !== 0) ? true : false
      }
    default:
      return {
        ...state,
        hasPreAction: vernier !== 0 ? true : false,
        hasNextAction: (vernier === 0 && stateStack.length !== 0) ? true : false
      }
  }
}

export default reducer