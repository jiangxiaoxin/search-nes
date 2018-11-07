import React from 'react'
import { toggleA, toggleB, reset } from './action';
import { connect } from 'react-redux'


class Change extends React.Component {
  render() {
    return (
      <div style={{marginBottom: 20}}>
        <p>name: {this.props.name}</p>
        <p>age: {this.props.age}</p>
        <div>
          <button onClick={this.props.changeA}>change -> a</button>
          <button onClick={this.props.changeB}>change -> b</button>
          <button onClick={this.props.reset}>reset -></button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.another.name,
    age: state.another.age
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeA: () => dispatch(toggleA()),
    changeB: () => dispatch(toggleB()),
    reset: () => dispatch(reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Change)