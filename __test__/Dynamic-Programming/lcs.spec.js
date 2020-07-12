import getLcs from '../../src/Dynamic-Programming/lcs';

describe("getLcs function test", () => {
  const str1 = "abcde";
  const str2 = "ace";
  test("exec test", () => {
    expect(getLcs(str1, str2)).toEqual(3)
  })
})