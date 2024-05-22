const { multiply, sum ,divide,substract } = require("./__test__/arithmetic");

///  describe

describe("nos tests", () => {


//// test
test("Multiplication de 1 par 2 est supposé etre égale à 2", () => {
  expect(multiply(1, 2)).toBe(2);
});
test("division de 1 par 0 est supposé etre impossible", () => {
  expect(() =>divide(1, 0)).toThrow("division par 0 impossible");
});
})