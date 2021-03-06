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

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text){
  let count = 0;
  text = text.toLowerCase().split('');
  let newText = [...new Set(text)];
  for (let i = 0; i < newText.length; i++) {
    if (text.indexOf(newText[i]) !== text.lastIndexOf(newText[i])) {
      count += 1
      }
  }
  return count
}

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0
  } else {
    array = array.sort((a,b)=>a-b)
    return (array.reduce((c,d)=>c + d)) - (array[0] + array[array.length-1]);
  }
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
  let count = 0;
  while (num.toString().length > 1) {
    count += 1
    num = num.toString().split('').map(a=>Number(a)).reduce((a,b)=>a*b)
  }
  return count
}

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){
  let newWord = '';
  word = word.toLowerCase().split('');
  for (let i = 0; i < word.length; i++) {
    newWord +=  (word.indexOf(word[i]) === word.lastIndexOf(word[i])) ? '(' : ')'
  }
  return newWord;
}

// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
function tribonacci(signature,n){
  let newArr = [];
  if (n<3) {
    for (let i = 0; i < n; i++) {
        newArr.push(signature[i])
    }
    return newArr
  } else {
    newArr = signature;  
  }
    
  for (let i = 3; i < n; i++) {
      newArr.push(newArr[i-1] + newArr[i-2] + newArr[i-3])
  }
    
  return newArr
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
function isValidWalk(walk) {
  if (walk.length != 10) return false;
  let count=0;
  walk.forEach(dir=> {
    switch (dir){
        case 'n': count +=1
        break
        case 's': count -=1
        break
        case 'e': count +=2
        break
        case 'w': count -=2
        break
    }
    console.log(count)
  })
  return count === 0 ? true : false 
}

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
function addBinary(a,b) {
  return (a+b).toString(2)
}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
function alphabetPosition(text) {
  return text.toLowerCase().split('').map(a=>(a.charCodeAt(0) - 96)).filter(b=> b>=1 && b<=26).join(' ')
}

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (fuelLeft * mpg) >= distanceToPump
};

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
function isTriangle(a,b,c) {
  return ((a+b>c) && (a+c>b) && (b+c>a)) ? true : false
}

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ?????, letter Q is coded as ???????????, and digit 1 is coded as ??????????????. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ???????? ?? ???????????   ??????????? ??????? ??????? ??.
// NOTE: Extra spaces before or after the code have no meaning and should be ignored.
// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ?????????????????????. These special codes are treated as single special characters, and usually are transmitted as separate words.
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
decodeMorse = function(morseCode){
  return morseCode.split('   ').map(a=> {
    return a.split(' ').map(b=> MORSE_CODE[b]).join('')
  }).join(' ').trim()
}

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
var uniqueInOrder=function(iterable){
  let array = [];
  for (const a of iterable) {
    if (a !== array[array.length-1]) array.push(a)
  }
  return array
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case)

  function toCamelCase(str){
    return str.replace(/[-_]+(.)/g, (match, word) => word.toUpperCase());
  }

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
  return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6)
}

// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
function rowSumOddNumbers(n) {
	return Math.pow(n,3)
}

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
 };

// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
var number = function(busStops){
  let sum = 0;
  for (let i = 0; i<busStops.length; i++) {
    sum = sum + (busStops[i][0] - busStops[i][1])
  }
  return sum
}

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
function oddOrEven(array) {
  return array.length === 0 || array.reduce((a,b)=>a+b) % 2 ===0 ? 'even' : 'odd'
}

// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
var min = function(list){
  return Math.min(...list)
}
var max = function(list){
  return Math.max(...list)
}