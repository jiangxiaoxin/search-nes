import React from "react";
import Result from "./Result.jsx";
import { connect } from 'react-redux';
import { increaseAction, decreaseAction } from "./action.js";
import Change from './Change.jsx';


class Counter extends React.Component {

  componentDidMount() {
    console.log('counter props', this.props)
  }

  render() {
    return (
      <div>
        <Result />
        <div style={{marginBottom: 20}}>
          <button onClick={this.props.handleIncrease}>increment</button>
          <button onClick={this.props.handleDecrease}>decrement</button>
          <button onClick={() => { console.log('counter log', this.props) }}>counter log store</button>
        </div>
        <Change />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps', state)
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleIncrease: (...args) => dispatch(increaseAction(args)),
    handleDecrease: (...args) => dispatch(decreaseAction(args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)