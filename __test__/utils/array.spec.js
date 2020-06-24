import { moveToFirst } from '../../src/utils/array';

describe("moveToFirst function test", () => {
  test("first index test", () => {
    const test_array = [1, 2, 3, 4];
    const result_array = moveToFirst(0, test_array);
    expect(result_array[0]).toEqual(1);
  });

  test("other index test", () => {
    const test_array = [1, 2, 3, 4];
    const result_array = moveToFirst(2, test_array);
    expect(result_array[0]).toEqual(3);
  })
})