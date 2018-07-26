const { deepClone } = require("../index");
const assert = require("assert");

// Tests using Mocha framework

describe("Empty object test", function() {
  let obj = {};

  let clonedObj = deepClone(obj);

  it("should not point to same reference", function() {
    assert.notStrictEqual(clonedObj, obj, "pointing to same reference");
  });

  it("should be deep equal", function() {
    assert.deepStrictEqual(clonedObj, obj, "not deep cloned");
  });

  it("should not modify deep clone when modifying original object", function() {
    obj = {
      name: "Jian",
      age: 25
    };
    assert.notDeepStrictEqual(clonedObj, obj, "modified deep clone");
  });
});

describe("Simple object test", function() {
  let obj = {
    name: "Jian",
    age: 25
  };

  let clonedObj = deepClone(obj);

  it("should not point to same reference", function() {
    assert.notStrictEqual(clonedObj, obj, "pointing to same reference");
  });

  it("should be deep equal", function() {
    assert.deepStrictEqual(clonedObj, obj, "not deep cloned");
  });

  it("should not modify deep clone when modifying original object", function() {
    obj.age = 20;
    assert.notDeepStrictEqual(clonedObj, obj, "modified deep clone");
  });
});

describe("Nested object test", function() {
  let obj = {
    words: ["Hello", "World"],
    cool: { cooler: { coolest: ["Too cool", "For school"], age: 25 } }
  };

  let clonedObj = deepClone(obj);

  it("should not point to same reference", function() {
    assert.notStrictEqual(clonedObj, obj, "pointing to same reference");
  });

  it("should be deep equal", function() {
    assert.deepStrictEqual(clonedObj, obj, "not deep cloned");
  });

  it("should not modify deep clone when modifying original object", function() {
    obj.cool.cooler = "modified";
    assert.notDeepStrictEqual(clonedObj, obj, "modified deep clone");
  });
});

describe("Complex object test", function() {
  let obj = {
    words: ["Hello", "World"],
    greeting: function() {
      return "Hello World!";
    },
    twoD: [[1, 2, 3], ["cake", "cheese"], ["Jian", 2018]],
    cool: { cooler: { coolest: ["Too cool", "For school"], age: 25 } }
  };

  let clonedObj = deepClone(obj);

  it("should not point to same reference", function() {
    assert.notStrictEqual(clonedObj, obj, "pointing to same reference");
  });

  it("should be deep equal", function() {
    assert.deepStrictEqual(clonedObj, obj, "not deep cloned");
  });

  it("should not modify deep clone when modifying original object", function() {
    obj = "modified";
    assert.notDeepStrictEqual(clonedObj, obj, "modified deep clone");
  });
});
