import { moveToFirst } from '../utils/array';

class LRUCache {
  constructor(options) {
    this.size = options.size || 10;
    this.dataMap = new Map();
    this.dataList = [];
  }

  put(key, value) {
    const dataMap = this.dataMap;
    const mapItem = dataMap.get(key);
    if (mapItem) {
      const theIndex = mapItem.index;
      this.dataList[theIndex] = {
        key,
        value
      }
      moveToFirst(theIndex, this.dataList);
      this.processMapIndex();
    } else {
      this.dataList.unshift({
        key,
        value
      });
      this.processMapIndex();
    }
    const len = this.dataList.length;
    if (len > this.size) {
      // 如果当前已经达到缓存上限就将最后一个元素干掉
      const lastItem = this.dataList[len - 1];
      this.dataMap.set(lastItem.key, null);
      this.dataList.pop();
    }
  }

  get(key) {
    const theData = this.dataMap.get(key);
    if (theData) {
      const theIndex = theData.index;
      moveToFirst(theIndex, this.dataList);
      this.processMapIndex();
      return theData.value
    } else {
      return -1
    }
  }
  
  // 同步索引值和value值
  processMapIndex() {
    this.dataList.forEach((item, index) => {
      const key = item.key;
      let mapItem = this.dataMap.get(key) || {};
      mapItem.index = index;
      mapItem.value = item.value;
      this.dataMap.set(key, mapItem);
    });
  }

}

export default LRUCache
