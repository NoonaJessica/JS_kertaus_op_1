'use strict';

const originArray = [1, 2, 3];
const newArray = [...originArray, 4, 5];

console.log(newArray);

const defaultValue = false;
const value = defaultValue && 'Fallback Value';

console.log(value);
