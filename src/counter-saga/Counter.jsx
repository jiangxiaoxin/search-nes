import React from 'react'
import { connect } from 'react-redux'
import { addOne, minusOne, addOneAsync } from './action'


class CounterSaga extends React.Component {


  render() {
    return (
      <div style={{padding: 10, border: '1px solid red'}}>
        <p>counter saga</p>
        <p>count: {this.props.currCount}</p>
        <div>
          <button onClick={this.props.addOne} style={{marginRight: 10}}>add one</button>
          <button onClick={this.props.minusOne} style={{marginRight: 10}}>minus one</button>
          <button onClick={this.props.addOneAsync} style={{marginRight: 10}}>add one async</button>
        </div>
        <button onClick={() => {console.log(this.props)}}>this.props</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currCount: state.currCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addOne: () => dispatch(addOne()),
    minusOne: () => dispatch(minusOne()),
    addOneAsync: () => dispatch(addOneAsync()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterSaga)