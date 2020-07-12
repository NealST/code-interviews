import getRain from '../../src/Dynamic-Programming/get-rain';

describe("get rain test", () => {
  const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  test("method1 function test", () => {
    expect(getRain.method1(input)).toEqual(6);
  })
  test("method1 function test", () => {
    expect(getRain.method2(input)).toEqual(6);
  })
})