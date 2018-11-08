// 用于存储历史状态, 撤销还原使用, 不会存储到当前状态, 因为只能获取到 action 触发时的那个状态
const stateStack = []

// 游标: 当前状态在历史状态的位置;
// 初始为 0, 当前状态所在位置
let vernier = 0

const reUnDo = store => next => action => {

  if (action.type !== 'RE_DO' && action.type !== 'UN_DO') {
    // stateStack.length = vernier

    // 获取当前状态
    stateStack.push(store.getState())

    // 将游标前进 1
    ++vernier
  }

  switch (action.type) {
    case 'RE_DO':

      // 若在做撤回时, 当前游标和状态历史长度相等, 则代表由最新状态往回撤,
      // 因为最新状态没有入栈, 所以需要将最新状态入栈存储起来
      // if (vernier === stateStack.length) {
      //   stateStack.push(store.getState())
      // }
      vernier--
      let preState = stateStack[vernier]
      next({
        type: 'RE_DO',
        payload: {
          ...preState
        }
      })
      break
    case 'UN_DO':
      // 若游标 + 1 等于状态长度, 代表目前在最新状态, 无法做还原操作了
      // if (vernier + 1 === stateStack.length) {
      //   return
      // }
      vernier++
      let nextState = stateStack[vernier]
      next({
        type: 'UN_DO',
        payload: {
          ...nextState
        }
      })
      break
    default:
      next(action)
      break
  }
}

export default reUnDo