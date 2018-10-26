export default class DB {
  constructor() {
    this.result = {}
  }

  /**
   * 查询本地缓存
   * @param {*} searchKey 数据对应的查询key
   * @param {*} page 数据对应的页码
   */
  getHits(searchKey, page) {
    let hits = this.result[searchKey]
    if (!hits) {
      return null
    }
    hits = hits[`${searchKey}_${page}`]
    if (!hits) {
      return null
    }
    return hits
  }

  /**
   * 本地缓存数据
   * @param {*} searchKey 数据对应的查询key
   * @param {*} page 数据对应的页码
   * @param {*} hits 数据列表
   */
  setHits(searchKey, page, hits) {
    let key = `${searchKey}_${page}`
    let hitsOfSearchKey = this.result[searchKey]
    if (!hitsOfSearchKey) { // 如果找不到searchKey对应的对象，直接初始化就行了
      this.result[searchKey] = {
        [key]: hits
      }
      return
    }

    // 对应的searchKey有了，但是没有对应的page的数据
    hitsOfSearchKey[key] = hits
  }
}
