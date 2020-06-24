import getPrime from '../../src/Prime';

describe("getPrime module test", () => {

  test("n = 2 exception test", () => {
    expect(getPrime(2)).toEqual(-1);
  })

  test("n = 10 test", () => {
    const results = getPrime(10);
    expect(results.length).toEqual(4);
    expect(results).toEqual(expect.arrayContaining([2, 3, 5, 7]));
  })

  test("n = 20 test", () => {
    const results = getPrime(20);
    expect(results.length).toEqual(8);
    expect(results).toEqual(expect.arrayContaining([2, 3, 5, 7, 11, 13, 17, 19]));  
  })
})