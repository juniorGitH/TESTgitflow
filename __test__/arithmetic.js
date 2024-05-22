
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const substract = (a, b) => a - b;
const divide = (a, b) => {
  if (b == 0) throw new Error("division par 0 impossible");
};
module.exports = {
sum,
multiply,
divide,
substract
}