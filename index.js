function forEach(arr,callback) {
for(let i = 0; i < arr.length; i++){
  callback(arr[i],i, arr)
}
}

function map(arr,callback) {
  const newArr = []
    for(let el of arr){
      newArr.push(callback(el))
    }
  return newArr
}

function filter(arr, callback) {
  const newArr = []
  for(let el of arr){
    if (callback(el)){
      newArr.push(el)
    }
  }
return newArr
}

function every(arr, callback) {
  for(let el of arr){
    if(!callback(el)){
      return false
    }
  }
return true
}

function some(arr,callback) {
  for(let el of arr){
    if(callback(el)){
      return true
    }
  }
return false
}

function majority(arr, callback) { 
  let trueCount = 0
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
      trueCount++
      if(trueCount>arr.length/2){
        return true
      }
    }
  }
return false
}

function once(callback) {
const _ = require('lodash');
return _.once(callback)
}

function groupBy(arr, callback) {
const newObj = {}
for(let el of arr){
  if(newObj[callback(el)]){
    newObj[callback(el)].push(el)
  } else {
    newObj [callback(el)] = [el]
  }
}
return newObj
}

function arrayToObject(arr,callback) {
  const newObj = {}
  for(let el of arr) {
    newObj[el] = callback(el)
  }
return newObj
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
