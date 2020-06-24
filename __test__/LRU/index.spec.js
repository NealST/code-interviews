import LRUCache from '../../src/LRU';

describe("LRUCache module test", () => {
  const cache = new LRUCache({
    size: 2
  });

  test("size test", () => {
    expect(cache.size).toEqual(2)
  })

  test("put function test", () => {
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.dataList.length).toEqual(2);
    expect(cache.dataList[0].key).toEqual(2);
    expect(cache.dataList[0].value).toEqual(2);
    expect(cache.dataList[1].key).toEqual(1);
    expect(cache.dataList[1].value).toEqual(1);
  });

  test("get function test", () => {
    const theValue = cache.get(1);
    expect(theValue).toEqual(1);
    expect(cache.dataList[0].key).toEqual(1);
    expect(cache.dataList[0].value).toEqual(1);
  });

  test("exceed size test", () => {
    cache.put(3, 3);
    expect(cache.dataList.length).toEqual(2);
    expect(cache.dataList[0].key).toEqual(3);
    expect(cache.dataList[0].value).toEqual(3);
  });

  test("deleted element get", () => {
    expect(cache.get(2)).toEqual(-1);
  });

  test("set value test", () => {
    cache.put(1, 4);
    expect(cache.dataList[0].key).toEqual(1);
    expect(cache.dataList[0].value).toEqual(4);
  });
})