import { minDistanceMap, minDistanceTable } from '../../src/Dynamic-Programming/edit-distance';

describe("edit distance test", () => {
  
  const example1_s1 = "horse";
  const example1_s2 = "ros";

  const example2_s1 = "intention";
  const example2_s2 = "execution";

  test("minDistanceMap function test", () => {
    expect(minDistanceMap(example1_s1, example1_s2)).toEqual(3);
    expect(minDistanceMap(example2_s1, example2_s2)).toEqual(5);
  });

  test("minDistanceTable function test", () => {
    expect(minDistanceTable(example1_s1, example1_s2)).toEqual(3);
    expect(minDistanceTable(example2_s1, example2_s2)).toEqual(5);
  });

})