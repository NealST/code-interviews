"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("../utils/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LRUCache = /*#__PURE__*/function () {
  function LRUCache(options) {
    _classCallCheck(this, LRUCache);

    this.size = options.size || 10;
    this.dataMap = new Map();
    this.dataList = [];
  }

  _createClass(LRUCache, [{
    key: "put",
    value: function put(key, value) {
      var dataMap = this.dataMap;
      var mapItem = dataMap.get(key);

      if (mapItem) {
        var theIndex = mapItem.index;
        this.dataList[theIndex] = {
          key: key,
          value: value
        };
        (0, _array.moveToFirst)(theIndex, this.dataList);
        this.processMapIndex();
      } else {
        this.dataList.unshift({
          key: key,
          value: value
        });
        this.processMapIndex();
      }

      var len = this.dataList.length;

      if (len > this.size) {
        // 如果当前已经达到缓存上限就将最后一个元素干掉
        var lastItem = this.dataList[len - 1];
        this.dataMap.set(lastItem.key, null);
        this.dataList.pop();
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      var theData = this.dataMap.get(key);

      if (theData) {
        var theIndex = theData.index;
        (0, _array.moveToFirst)(theIndex, this.dataList);
        this.processMapIndex();
        return theData.value;
      } else {
        return -1;
      }
    } // 同步索引值和value值

  }, {
    key: "processMapIndex",
    value: function processMapIndex() {
      var _this = this;

      this.dataList.forEach(function (item, index) {
        var key = item.key;
        var mapItem = _this.dataMap.get(key) || {};
        mapItem.index = index;
        mapItem.value = item.value;

        _this.dataMap.set(key, mapItem);
      });
    }
  }]);

  return LRUCache;
}();

var _default = LRUCache;
exports["default"] = _default;