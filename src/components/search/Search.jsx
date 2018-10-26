import React from 'react';
import PropTypes from 'prop-types';


import './Search.css';

export default class Search extends React.Component {

  // 如果有默认值，初始第一次就去查询一次
  componentDidMount() {
    this.props.value && this.props.onSearch();
  }


  render() {
    return (
      <div className="search-wrapper">
        <input type="text" onChange={ this.props.onChange } value={ this.props.value } className="search-input"/>
        <button type="button" onClick={this.props.onSearch } className="search-btn">search</button>
      </div>
    )
  }
}


Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired
}