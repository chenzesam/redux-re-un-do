# redux-re-un-do

record state to stack and use in redo or undo

## Todos

- [ ] 当 redo / undo 后再触发一次普通操作时, 需要重置 state stack
- [ ] 无法 redo / undo 的条件判断
- [ ] enhance reducer 之后添加返回的数据 { canRedo: Boolean, canUndo: Boolean }

## How to Use

```js
// reducer.js
import reUnDo from 'redux-re-un-do'

function reducer(state = { count: 0 }, action) {
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
      return {
        ...state
      }
  }
}

export default reUnDo(reducer)
```

```js
// Counter.js
import React from 'react'
import { actionCreator } from 'redux-re-un-do'

class Counter extends React.Component {
  handleClickAddButton = () => {
    this.props.dispatch({
      type: 'ADD'
    })
  }
  handleClickReduceButton = () => {
    this.props.dispatch({
      type: 'REDUCE'
    })
  }
  handleReDo = () => {
    this.props.dispatch(actionCreator.redo())
  }
  handleUnDo = () => {
    this.props.dispatch(actionCreator.undo())
  }

  render() {
    return <div>
      <div>{this.props.count}</div>
      <button onClick={this.handleClickAddButton}>+ 1</button>
      <button onClick={this.handleClickReduceButton}>- 1</button>
      <button disabled={!this.props.counter.canRedo} onClick={this.handleReDo}>redo</button>
      <button disabled={!this.props.counter.canUndo} onClick={this.handleUnDO}>undo</button>
    </div>
  }
}

export default connect((state) => ({
  counter: state.counter,
}))(Counter)
```