// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
    let reverseArray = str.replace(/\s/g, '# #').split('#');
    return reverseArray.map(word => word.split('').reverse().join('')).join('');
  }

//   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
const filter_list = l => l.filter(x => typeof x !== 'string');

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
const litres = time => Math.floor(time * .5);

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  } else if (p1 === 'scissors' && p2 === 'paper' ||  
             p1 === 'paper' && p2 === 'rock' ||
             p1 === 'rock' && p2 === 'scissors' ) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
};

// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
function pipeFix(numbers){
    const newArray = []
    for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++) {
      newArray.push(i);
    }
    return newArray;
  }

  // In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
  function findMultiples(integer, limit) {
    const newArray = []
    for (let i = integer; i <= limit; i += integer) {
      newArray.push(i);
    }
    return newArray;
}

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
const removeEveryOther = arr => arr.filter((element, index) => index % 2 === 0)

// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.
const abbrevName = name => name.split(' ').map((names) => names[0]).join('.').toUpperCase();

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
const digitize = n => n.toString().split('').map(x => parseInt(x)).reverse();

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
const squareDigits = num => parseInt(num.toString().split('').map(x => x * x).join(''));

// Your task is to write a function that takes a string and return a new string with all vowels removed.
const disemvowel = str => str.replace(/[aeiou]/gi, '');

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number)
  return Math.max(...numbers) + ' ' + Math.min(...numbers)
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
const descendingOrder = n => parseInt(n.toString().split('').sort((a,b)=>b - a).join(''))

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
const getMiddle = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

// Given an integral number, determine if it's a square number:
const isSquare = (n)=>n>=0 && Math.sqrt(n)%1 === 0;

// Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
  s = s.split(' ').sort((a, b) => a.length - b.length);
  return s[0].length
}

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
const check = (a, x) => a.includes(x)