// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// If a value is present in b, all of its occurrences must be removed from the other:
const arrayDiff = (a, b) => a.filter(c => !b.includes(c));

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
  const num = names.length;
  if (names.length === 0) {
    return 'no one likes this'
  } else if (num === 1) {
    return `${names[0]} likes this`
  } else if (num === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (num === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${num - 2} others like this`
  }
}

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.
const getAverage = marks =>  Math.floor(marks.reduce((a,b) => a + b,0) / marks.length)

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > Math.floor(classPoints.reduce((a,b) => a + b,0) / classPoints.length)
}

// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
function bmi(weight, height) {
  let bmi = weight / (height * height);
   if (bmi <= 18.5) {
      return 'Underweight'
     } else if (bmi <= 25) {
      return 'Normal'
    } else if (bmi <= 30) {
      return 'Overweight'
    } else {
      return 'Obese'
    }
}

// Complete the solution so that the function will break up camel casing, using a space between words.
const solution = string => string.split(/(?=[A-Z])/).join(' ');

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b)=>a+b) + arr2.reduce((a,b)=>a+b); //something went wrong
}

// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digital_root(n) {
  n = String(n).split('').map(a=>Number(a)).reduce((a,b)=>a+b)  
  console.log(n)
  return (n<10) ? n : digital_root(n)
}

// Scramblies
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
//My answer below, worked but timed out
function scramble(str1, str2) {
  let count = 0
  str1 = str1.split('').reduce((a,b)=> {
    a[b] ? a[b]++ : a[b] = 1;
    return a;}, {});
  str2 = str2.split('').reduce((a,b)=> {
    a[b] ? a[b]++ : a[b] = 1;
    return a;}, {});
  for (let [key2, value2] of Object.entries(str2)) {
    for (let [key1, value1] of Object.entries(str1)) {
      if (key1 === key2 && value1 >= value2) count += 1
      }
    }
  return count === Object.keys(str2).length
}
// After looking up results
function scramble(str1, str2) {
  let obj1 = makeObject(str1)
  let obj2 = makeObject(str2)
  return Object.entries(obj2).every(([key, val]) => obj1[key] >= val)
}
function makeObject(str) {
  let obj = {}
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj
}

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
function validParentheses(parens) {
  let count = 0;
  for (a of parens) {
    if (a === '(') {
      count += 1
    } else if ((a === ')') && (count > 0)) {
      count -= 1
    } else {
      return false
    }
  }
  return (count === 0) ? true : false
}

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)
function hero(bullets, dragons){
  return (bullets >= 2*dragons)
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
  const plays = `${name} plays banjo`
  const notPlays = `${name} does not play banjo`
  return name[0].toLowerCase() === 'r' ? plays : notPlays
}

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
  const count = [];
  for (let i = 1; i <= n; i++) {
    count.push(i)
  }
  return count
}

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function(n) {
  return n.toString(2).split('').map(a=>Number(a)).reduce((a,b)=>a+b,0)
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
  return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers){
  const even = integers.filter(a=>a%2===0)
  if (even.length === 1) {
    return even[0]
  } else {
    return integers.filter(a=>a%2!==0)[0]
  }
}