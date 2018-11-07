import React from 'react'
import { connect } from 'react-redux'


class Result extends React.Component{

  componentDidMount() {
    console.log('result', this.props)
  }

  render() {
    return (
      <div className="result-part" style={{marginBottom: 20}}>
        current value : { this.props.value }
      </div>
    )
  }
  
}


const mapStateToProps = (state, ownProps) => {
  return {
    value: state.count
  }
}

export default connect(mapStateToProps)(Result)