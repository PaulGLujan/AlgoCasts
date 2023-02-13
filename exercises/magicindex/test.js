const magicIndex = require("./index");

test("magicIndex is a function", () => {
  expect(typeof magicIndex).toEqual("function");
});

test("returns the correct value", () => {
  const array = [0, 22, 23, 34];
  const mi = magicIndex(array);
  expect(mi).toEqual(0);
});

test("returns the correct value", () => {
  const array = [-2, -2, -11, 3, 6, 44];
  const mi = magicIndex(array);
  expect(mi).toEqual(3);
});

test("returns the correct value", () => {
  const array = [12, 11, 6, 33, 2, 44];
  const mi = magicIndex(array);
  expect(mi).toEqual(null);
});
