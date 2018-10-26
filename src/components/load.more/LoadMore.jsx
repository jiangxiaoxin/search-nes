import React from 'react';
import PropTypes from 'prop-types'
import './LoadMore.css';

class LoadMoreBtn extends React.Component {

  render() {
    return (
      <div>
        <button className="load-more-button" onClick={ this.props.onClick }>More</button>
      </div>
    )
  }
}

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}


const Loading = (props) => {
  return (
    <div className="loading">loading...</div>
  )
}

const WithLoading = (Component) =>  (props) => {
  const { isSearching, ...rest } = props
  return (
    <>
      { isSearching ? <Loading /> : <Component { ...rest }/>}
    </>
  )
}

const LoadMore = WithLoading(LoadMoreBtn)

export default LoadMore