export const moveToFirst = function(index, array) {
  const theItem = array[index];
  if (index === 0) {
    return array;
  }
  array.splice(index, 1);
  array.splice(0, 0, theItem);
  return array;
}