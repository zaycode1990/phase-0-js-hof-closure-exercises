# Higer-Order Functions & Closures

## Learning Goals

- Practice writing higher order functions
- Practice using closure

## Introduction

These exercises will help reinforce everything you've learned so far about callbacks, higher order functions, and closures.

## `forEach`

Write a function called forEach that accepts an array and a callback. It should run the callback on each of the array elements. The function does not return anything.

## `map`

Write a function called map that takes an array and a callback. The function returns a new array. The callback function should be called on each element of the array and the result of each call should be stored in the new array.

## `filter`

Write a function called filter that takes in an array and a callback as arguments. The function should return a new array. The new array should only have elements from the original array that return true when called with the given callback.

## `every`

Write a function called every which takes an array and a callback. The function should return a boolean. It should return true if the callback returns true when called with each of the elements in the array and false otherwise.

## `some`

Write a function called some that takes in an array and a callback. The function should return a boolean. It should return true if the callback returns true for at least one element in the array and false otherwise.

## `majority`

Create a function called majority that takes in two parameters: array and callback. The function should return true only if a majority of the elements in the array evaluates to true when called with the callback.

## `once`

Write a function called once that takes in a callback as an argument and returns a function. When the returned function is called for the first time, it should call the initial callback and return the output. Repeat calls to the function should return the value of the first invocation without invoking the callback again.

## `groupBy`

Write a function called groupBy which takes an array and a callback. The function should return an object. Each return value of the callback should be a key of the object and the values should be the input element with which the callback was called.

## `arrayToObject`

Write a function called arrayToObject which takes an array and a callback. The function should return an object. Each element of the input array should be a key of the returned object and the output from the callback with an element passed in as the corresponding value.

## References

- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [once](https://lodash.com/docs/4.17.15#once)
- [groupBy](https://lodash.com/docs/4.17.15#groupBy)
