const enhancer = require("./enhancer.js");
// test away!
//creating objects to test functions
const sword = {
  name: "sword",
  durability: 10,
  enhancment: 16,
};
const hammer = {
  name: "hammer",
  durability: 22,
  enhancment: 8,
};
const wand = {
  name: "wand",
  durability: 1,
  enhancment: 20,
};
const stick = {
  name: "stick",
  durability: 1,
  enhancment: 0,
};
const stickHeavy = {
  name: "heavy Stick",
  durability: 80,
  enhancment: 4,
};
//initial test to test setup
// test("initial test", () => {
//   expect(true).toBe(true);
// });
describe("Enhancer tests", () => {
  describe("Durability tests", () => {
    test("Repair item returns 100 durability", () => {
      expect(enhancer.repair(sword)).toStrictEqual({
        ...sword,
        durability: 100,
      });
      expect(enhancer.repair(hammer)).toStrictEqual({
        ...hammer,
        durability: 100,
      });
      expect(enhancer.repair(wand)).toStrictEqual({ ...wand, durability: 100 });
    });
  });
  describe("Success tests", () => {
    test("Success adds one to enhancement", () => {
      expect(enhancer.success(sword)).toStrictEqual({
        ...sword,
        enhancment: 17,
      });
      expect(enhancer.success(hammer)).toStrictEqual({
        ...hammer,
        enhancment: 9,
      });
    });
    test("Success will not let enhancement go above 20", () => {
      expect(enhancer.success(wand)).toStrictEqual({ ...wand, enhancment: 20 });
    });
  });

  describe("Fail tests", () => {
    test("Fail will subtract 5 from enhancement less than 15", () => {
      expect(enhancer.fail(hammer)).toEqual({ ...hammer, enhancment: 3 });
    });
    test("Fail will subtract 10 from enhancement 15 or 16", () => {
      expect(enhancer.fail(sword)).toEqual({ ...sword, enhancment: 6 });
    });
    test("Fail will not reduce enhancement more than 0", () => {
      expect(enhancer.fail(stick)).toEqual({ ...stick, enhancment: 0 });
      expect(enhancer.fail(stickHeavy)).toEqual({
        ...stickHeavy,
        enhancment: 0,
      });
    });
    test("Fail will decrease enhancement by one if greater than 16", () => {
      expect(enhancer.fail(wand)).toEqual({ ...wand, enhancment: 19 });
    });
  });
});

describe("Stretch Get tests", () => {
  test("Get will add enhancement level before item name", () => {
    expect(enhancer.get(sword)).toEqual({ ...sword, name: "[+16] sword" });
    expect(enhancer.get(hammer)).toEqual({ ...hammer, name: "[+8] hammer" });
    expect(enhancer.get(wand)).toEqual({ ...wand, name: "[+20] wand" });
  });
  test("Get will not add enhancement to name if enhancement equal to 0", () => {
    expect(enhancer.get(stick)).toEqual({ ...stick, name: "stick" });
  });
});
