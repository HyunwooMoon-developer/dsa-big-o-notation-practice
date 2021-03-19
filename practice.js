/* eslint-disable no-constant-condition */
function find(arr, number) {
  let i = 0;
  while (true) {
    const index = Math.floor(Math.random() * arr.length);
    i++;
    if (arr[index] === number) {
      break;
    }
  }
  console.log(`${number} was found in trial #${i}`);
}

const arr = [15, 16, 10, 2, 9, 5, 6];
find(arr, 16);

function product(array) {
  let product = 1;
  for (let i = 0; i < array.length; i += 1) {
    product *= array[i];
  }
  return product;
}

const array = [2, 3, 5];
console.log(product(array));

//O(n) : Linear Time
/*---------------------------------------------------------------- */
function getFirstItem(array) {
  return array[0];
}

const array2 = [1, 2, 3, 4];
console.log(getFirstItem(array2));
//O(1) : Constant Time order of growth has a fixed number of operations
//The running doens't depend on the size of the input
//EX) arithmetic operations, array indexing, object property access

/*---------------------------------------------------------------- */
function logPowerOfTwoValues(array) {
  for (let i = 1; i < array.length; i *= 2) {
    console.log("logPowerOfTwoValues : ", array[i]);
  }
}

const array3 = [1, 3, 5, -2, 11, 15, 16, 12];
logPowerOfTwoValues(array3);

// O(log n) : Logarithmic time
//Some fraction of the remaining input is processed in each iteration of a logarithmic algorithm

/*---------------------------------------------------------------- */
function includes(items, itemToMatch) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === itemToMatch) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 1, 2, 3, 4, 6], 6));
console.log(includes([1, 1, 2, 3, 4, 6], 7));

// O(n) : Linear time
// AN algorithm whose complexity is proportional to its input size has a linear order of growth, or O(n)

/*---------------------------------------------------------------- */
function timesTable(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push([]);
    for (let j = 0; j < array.length; j++) {
      result[i].push(array[i] * array[j]);
    }
  }
  return result;
}

console.log(timesTable([2, 4, 6, 8]));

//An algorithm whose running time is n to some power has a polynomial runtime, O(n^2)
//For example, two nested loops each running from O to n
// the outer loop will run the inner loop n times
// each time, the inner loop will run n times
// the number of iterations is n*n, which gives us a complexity of O(n^2)

function sumProduct(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  console.log(`Sum is ${sum} and product is ${product}`);
}

sumProduct([1, 2, 3, 4, 5]);

function sum(array) {
  let sum = 0;
  let ticks = 1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return { result: sum, ticks };
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//ticks to 1 so count the 1-time operation of initializing sum variable.

function getRandomItem(array) {
  let ticks = 0;
  //get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
    result: item,
    ticks: ticks,
  };
}

console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// O(1) Constant time

/*---------------------------------------------------------------- */
function howManyLessThanNitems(array, n) {
  let ticks = 0;
  if (!array.length || array[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0,
    highIndex = array.length;

  while (highIndex > lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);

    if (array[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else {
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks,
      };
    }
  }
}

console.log(howManyLessThanNitems([1,2,3], 2));
console.log(howManyLessThanNitems([1,2,3,4,5,6,7,8,9,10],2));

// O(log(n)) Logarithmic time

/*---------------------------------------------------------------- */

function findMin(array){
    let min = array[0], ticks = 1;
    for(let i = 1; i < array.length ; i++){
        ticks++;
        if(array[i] < min){
            min = array[i];
        }
    }
    return {
        result : min,
        ticks: ticks,
    };
}

console.log(findMin([1,2,3]));
console.log(findMin([1,2,-3]));

// O(n) Linear time

/*---------------------------------------------------------------- */

function hasDuplicates(array){
    let ticks = 0, result = false;
    for(let i = 0 ; i < array.length ; i++){
        ticks++;
        for(let j = 0 ; j < array.length ; j++){
            ticks++;
            if(array[i] === array[j] && i !== j){
                result = true;
            }
        }
    }
    return {
        result : result,
        ticks : ticks,
    }
}

console.log(hasDuplicates([1,2,2]));
console.log(hasDuplicates([1,3,5,6,8,9]));

// O(n^2) Polynomial time

/*---------------------------------------------------------------- */

function countTriangle(layers){
    let ticks = 1;
    let count = 0;
    let layer = 0;
    let lastLayer = 1;
    while(layer < layers){
        ticks++;
        let newLayer = 0;
        for(let i = 0 ; i < lastLayer ; i++){
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result : count,
        ticks : ticks,
    }
}

console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));

/*---------------------------------------------------------------- */

function isEven(value){
    if(value %2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(3));

// O(1) constant time;

/*---------------------------------------------------------------- */

function areYouHere(arr1, arr2){
    for(let i = 0; i < arr1.length ; i++){
        const el1 = arr1[i];
        for(let j = 0 ; j < arr2.length ; j++){
            const el2 = arr2[j];
            if(el1 === el2){
                return true;
            }
        }
    }
    return false;
}

console.log(areYouHere([1,2],[2]));

// O(n^2) Polynomial time  : an algorithm requires 2 levels of looping(n*n);

/*---------------------------------------------------------------- */

function doubleArrayValues(array){
    for(let i = 0 ; i < array.length ; i++){
        array[i]*=2;
    }
    return array;
}

console.log(doubleArrayValues([1,2,3,1.3]));

// O(n) Linear time : it's called one loop;

function naiveSearch(array, item){
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] === item){
            return i;
        }
    }
}

console.log(naiveSearch([1,2,3,4,5], 3));

// O(n) Linear time : searching through the array;

/*---------------------------------------------------------------- */

function createPairs(array){
  for(let i = 0 ; i < array.length ; i++){
    for(let j = i+ 1 ; j <array.length; j++){
      console.log(array[i] + ',' + array[j]);
    }
  }
}

createPairs([1,2,3,4,5,6]);

// O(n^2) Polynomial time : an algorithm requires 2 levels of looping(O(n*n));

/*---------------------------------------------------------------- */

function compute(num){
  let result = [];
  for(let i =1; i < num; i++){
    if(i === 1){
      result.push(0);
    }
    else if(i === 2){
      result.push(1);
    }
    else{
      result.push(result[i-2] + result[i -3]);
    }
  }
  return result;
}

console.log(compute(3));
console.log(compute(6));

// O(n) Linear time : it's called one loop;

/*---------------------------------------------------------------- */

function efficientSearch(array, item){
  let minIndex = 0;
  let maxIndex = array.length -1;
  let currentIndex ;
  let currentElement;

  while(minIndex <= maxIndex){
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if(currentElement < item){
      minIndex = currentIndex +1;
    }
    else if(currentElement > item){
      maxIndex = currentIndex -1;
    }
    else{
      return currentIndex;
    }
  }
  return -1;
}

console.log(efficientSearch([1,2,3,4], 1));

// O(log(n)) Logarithmic time : while logarithmic time complexity algorithms do take
/*---------------------------------------------------------------- */

function findRandomElement(array){
  return array[Math.floor(Math.random()*array.length)];
}

console.log(findRandomElement([1,3,5,6,-2]));

// O(1) constant time : it's called one time.

/*---------------------------------------------------------------- */

function isWhat(n){
  if(n < 2 || n %2 !== 0){
    return false;
  }
  for(let i = 2; i < n; ++i){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

console.log(isWhat(2));
console.log(isWhat(10));
console.log(isWhat(1));

// O(n) Linear time : function checks to see it's not the prime number;
