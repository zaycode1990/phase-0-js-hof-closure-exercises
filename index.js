function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const resArr = [];
  for (let i = 0; i < array.length; i++) {
    resArr.push(callback(array[i], i, array));
  }
  return resArr;
}

function filter(array, callback) {
  const resArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      resArr.push(array[i]);
    }
  }
  return resArr;
}

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
  }
  return true;
}

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      return true;
    }
  }
  return false;
}

function majority(array, callback) {
  const majorityCount = Math.ceil(array.length / 2);
  let trueCount = 0;
  for (const el of array) {
    if (callback(el)) {
      trueCount++;
      if (trueCount >= majorityCount) return true;
    }
  }
  return false;
}

function once(callback) {
  let called = false;
  let cachedOutput;
  function innerOnce(...args) {
    if (!called) {
      cachedOutput = callback(...args);
      called = true;
      return cachedOutput;
    }
    return cachedOutput;
  }
  return innerOnce;
}

function groupBy(array, callback) {
  let result = {};
  for (const el of array) {
      let key = callback(el);
      if (!result.hasOwnProperty(key)) {
          result[key] = [];
      }
      result[key].push(el);
  }
  return result;
}

function arrayToObject(array, callback) {
  const res = {};
  for (const el of array) {
    res[el] = callback(el);
  }
  return res;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};