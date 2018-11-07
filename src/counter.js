import React from 'react'
import { connect } from 'react-redux'

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
    this.props.dispatch({
      type: 'RE_DO'
    })
  }
  handleUnDO = () => {
    this.props.dispatch({
      type: 'UN_DO'
    })
  }
  render() {
    console.log(this.props)
    return <div>
      <div>{this.props.counter.count}</div>
      <button onClick={this.handleClickAddButton}>click + 1</button>
      <button onClick={this.handleClickReduceButton}>click - 1</button>
      <button onClick={this.handleReDo}>redo</button>
      <button onClick={this.handleUnDO}>undo</button>
    </div>
  }
}

export default connect((state) => ({
  counter: state.counter,
  reUnDo: state.reUnDo
}))(Counter)