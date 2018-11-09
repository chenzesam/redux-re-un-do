import React from 'react'
import { connect } from 'react-redux'

import actionCreator from '../redux-re-un-do/actions'

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
  handleUnDO = () => {
    this.props.dispatch(actionCreator.undo())
  }
  render() {
    return <div>
      <div>{this.props.counter.count}</div>
      <button onClick={this.handleClickAddButton}>click + 1</button>
      <button onClick={this.handleClickReduceButton}>click - 1</button>
      <button disabled={!this.props.counter.canRedo} onClick={this.handleReDo}>redo</button>
      <button disabled={!this.props.counter.canUndo} onClick={this.handleUnDO}>undo</button>
    </div>
  }
}

export default connect((state) => ({
  counter: state.counter,
}))(Counter)