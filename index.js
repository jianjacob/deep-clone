function deepClone(obj) {
  // handle inputs that aren't objects
  if (typeof obj !== "object") {
    return obj;
  }
  // null clone
  if (obj === null && typeof obj === "object") {
    return null;
  }
  // object to store deep cloned copy
  let clonedObj = {};

  // perform 'deep' clone
  for (let key in obj) {
    let prop = obj[key];
    if (prop != null && typeof prop === "object") {
      // arrays are special
      if (prop.constructor === Array) {
        clonedObj[key] = Array(...prop);
      } else {
        clonedObj[key] = deepClone(obj[key]);
      }
    } else {
      clonedObj[key] = prop;
    }
  }

  return clonedObj;
}

module.exports = {
  deepClone
};
