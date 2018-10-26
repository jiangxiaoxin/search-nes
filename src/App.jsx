import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

import Search from './components/search/Search.jsx';
import Table from './components/table/Table.jsx';
import LoadMore from './components/load.more/LoadMore.jsx';

import DB from './utils/db.js';

// import hits from './net/mock.js';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';


class App extends Component {

  constructor(props) {
    super(props);
    this.db = new DB();
    this.state = {
      searchItem: '',  //当前显示的数据的key
      searchKey: DEFAULT_QUERY, //当前查询的key
      isSearching: false,
      error: undefined,
      page: 0,
      hits: [], // 当前显示的列表数据
    };

    this.bindFunctions();
  }


  render() {
    return (
      <div className="app-wrapper">
        <Search onChange={ this.handleSearchInputChange } onSearch={ this.handleSearchBtnClick } value={ this.state.searchKey}/>
        <Table data={ this.state.hits }/>
        <LoadMore isSearching={ this.state.isSearching } onClick={ this.handleLoadMore }/>
      </div>
    );
  }

  bindFunctions() {
    this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.updateHitsList = this.updateHitsList.bind(this);
  }

  handleLoadMore() {
    console.log(`handleLoadMore ${this.state.searchKey}  ${this.state.searchItem}  ${this.state.page}`)
    if (!this.state.searchItem) { //没有确切的搜索过某个key，你怎么能加载更多呢
      this.setState({
        error: new Error("can't load more")
      })
      return
    }
    let page = this.state.page + 1
    let hits = this.db.getHits(this.state.searchItem, page)
    if (hits && hits.length > 0) {
      console.log('不用加载更多了，本地已经有了')
      let currentHits = this.state.hits
      currentHits = currentHits.concat(hits)
      this.setState({
        hits: currentHits,
        page
      })
    } else {
      this.fetchHits(this.state.searchItem, this.state.page + 1)
    }
  }

  /**
   * 点击顶部按钮查询。点击后肯定从第0页开始重新查
   */
  handleSearchBtnClick() {
    let searchKey = this.state.searchKey
    console.log("要查的key", searchKey)
    console.log('当前显示的查询key', this.state.searchItem)
    let hits = this.db.getHits(searchKey, 0)
    if (hits && hits.length > 0) {  // 从缓存中找到了对应的数据
      console.log('找到数据了，不用请求了')
      this.updateHitsList(searchKey, 0, hits)
      return
    }

    // 找不到对应的数据，就重新请求数据，然后建立缓存
    this.setState({
      page: 0,
      searchItem: searchKey,
      hits: []
    }, () => {  // 更新完后去获取真的数据
      this.fetchHits(searchKey, 0)
    })
  }

  /**
   * 这里将真的会去获取新数据哦
   * @param searchKey 查询的关键词
   * @param page 查询的页码
   */
  fetchHits(searchKey, page = 0) {
    // return
    if (this.state.isSearching) {
      alert('searching, wait plz...');
      return
    }
    this.setState({
      isSearching: true
    })
    let url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchKey}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    axios(url).then(res => {
      let data = res.data;
      const { hits, page } = data
      if (hits && hits.length > 0) {  //能拿到数据
        this.updateHitsList(searchKey, page, hits)
        this.db.setHits(searchKey, page, hits)
      } else {  //回包里并没有有效数据
        let error = new Error("there is no more data about " + this.state.searchKey)
        throw error
      }
    }).catch(error => {
      this.setState({
        error,
        isSearching: false
      })
    })
  } 

  /**
   * 获取到新数据之后，更新要显示的数据
   * @param  searchKey 获取到的数据对应的检索词
   * @param  page   数据的页数
   * @param  hits   数据列表
   */
  updateHitsList(searchKey, page, hits) {
    console.log(`updateHitsList ${searchKey} ${this.state.searchItem} ${page}`)
    if(searchKey === this.state.searchItem) { // 如果一样，那就增量更新数据
      let currentHits = this.state.hits
      currentHits = currentHits.concat(hits)
      this.setState({
        hits: currentHits,
        page,
        isSearching: false,
      })
    } else {  // 如果不一样，那就替换
      this.setState({
        hits,
        page,
        isSearching: false,
        searchItem: searchKey
      })
    }
  }

  /**
   * 顶部输入框输入
   * @param e input event
   */
  handleSearchInputChange(e) {
    let value = e.target.value;
    this.setState({
      searchKey: value
    });
  }
}

export default App;
