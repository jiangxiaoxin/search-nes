import React from 'react';

import { parseTime } from '../../utils/index.js';

import './Table.css';

export default class Table extends React.Component {
  render() {
    return (
      <div className="table-wrapper">
        <TableHeader />
        <TableList data={ this.props.data }/>
      </div>
    )
  }
}


class TableHeader extends React.Component {
  render() {
    return (
      <div className="table-header">
        <span>INDEX</span>
        <span>ID</span>
        <span>TITLE</span>
        <span>AUTHOR</span>
        <span>COMMENTS</span>
        <span>POINTS</span>
        <span>CREATE_AT</span>
      </div>
    )
  }
}

class TableList extends React.Component {

  render() {
    let listItems = this.props.data.map((hit, index) => {
      return (
        <TableListItem key={ hit.objectID } data={ hit } index={ index }/>
      )
    })
    return (
      <div className="table-list">
        { listItems }
      </div>
    )
  }
}

class TableListItem extends React.Component {
  render() {
    const { title, author, num_comments, points, url, created_at, objectID } = this.props.data
    let createAt = parseTime(created_at)
    return (
      <div className="table-list-item">
        <span>{ this.props.index + 1 }</span>
        <span>{ objectID }</span>
        <span>
          <a href={ url } target='_blank' className="title-link" rel='noreferrer noopener'>{ title }</a>
        </span>
        <span>{ author }</span>
        <span>{ num_comments }</span>
        <span>{ points }</span>
        <span>{ createAt }</span>
      </div>
    )
  }
}




