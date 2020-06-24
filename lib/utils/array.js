"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveToFirst = void 0;

var moveToFirst = function moveToFirst(index, array) {
  var theItem = array[index];

  if (index === 0) {
    return;
  }

  array.splice(index, 1);
  array.splice(0, 0, theItem);
  return array;
};

exports.moveToFirst = moveToFirst;