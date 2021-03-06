// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
    let sheepCount = '';
    for (let i = 1; i <= num; i++){
      sheepCount = sheepCount + `${i} sheep...`
    }
    return sheepCount
  }

//   Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

  function points(games) {
    let sum = 0;
    games.map(x=>{
      if (x[0] > x[2])   {
        sum += 3
      } else if (x[0] === x[2]) {
        sum += 1
      }
    })
    return sum
  }

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
function bonusTime(salary, bonus) {
    return `£${bonus ? salary * 10 : salary}`
  }

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
    return words.join(' ')
 };

//  Write a function to split a string and convert it into an array of words.
  function stringToArray(string){
    return string.split(' ');
  }

// Create a function with two arguments that will return an array of the first (n) multiples of (x).
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(i * x)
    }
    return z;
}


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
    return x.reduce((a,b)=>a + Number(b),0)
}

// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    return i * 2
}

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
function divisors(integer) {
    let array = [];
    for (let i = 2; i < integer; i++){
      if (Number.isInteger(integer / i)) array.push(i)
    }
    return array.length > 0 ? array : `${integer} is prime`
  };

//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending){
    return (str.substring(str.length - ending.length) === ending) ? true : false
}

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.
function removeSmallest(numbers) {
    const numIndex = numbers.indexOf(Math.min(...numbers))
    return [...numbers.slice(0,numIndex), ...numbers.slice(numIndex + 1)]
}

// Write a function that returns both the minimum and maximum number of the given list/array.
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.  
function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}

// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
var number=function(array){
  const arrayTwo = [];
  for (let i = 0; i < array.length; i++) {
    arrayTwo.push(`${i+1}: ${array[i]}`)
  }
  return arrayTwo;
}

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
function dontGiveMeFive(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    if ((i+'').indexOf('5') === -1) array.push(i)
  }
  return array.length
}

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
function stray(numbers) {
  return (numbers.sort().indexOf(numbers[0]) === numbers.sort().lastIndexOf(numbers[0])) ? numbers[0] : numbers[numbers.length-1]
}

// Count the number of divisors of a positive integer n.
function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count += 1
  }
  return count
}

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 
function divisors(integer) {
  let array = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) array.push(i)
  }
  return array.length > 0 ? array : `${integer} is prime`
};