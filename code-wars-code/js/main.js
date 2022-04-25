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

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
String.prototype.toJadenCase = function (str) {
  return this.split(' ').map(a => a[0].toUpperCase() + a.substring(1)).join(" ");
};

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
const accum = s => s.split('').map((a, i) => (a.toUpperCase() + a.toLowerCase().repeat(i))).join("-");

// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle
const findNeedle = haystack => `found the needle at position ${haystack.findIndex(x => x === 'needle')}`

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
function past(h, m, s){
  return (3.6e+6 * h) + (60000 * m) + (1000 * s)
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc (flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower2 % 2 === 0 && flower1 % 2 !== 0){
    return true
  } else {
    return false
  }     
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
const DNAtoRNA = dna => dna.replace(/[T]/gi, 'U');

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna){
  let compDNA = '';
  for (const symbol of dna) {
    if (symbol === 'A') {
      compDNA += 'T'
    } else if (symbol === 'T') {
      compDNA += 'A' 
    } else if (symbol === 'C') {
      compDNA += 'G'
    } else if (symbol === 'G') {
      compDNA += 'C'
    }
  }
  return compDNA
}

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  return cc.substring(0, cc.length - 4).replace(/[a-z\d]/gi,"#") + 
  cc.substring(cc.length - 4, cc.length);
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b,0)
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
function getSum( a,b )
{
   let sum = 0;
   if (a < b) {
     for (let i = a; i <= b; i++) {
       sum+= i;
     }
   } else if (a > b) {
     for (let i = b; i <= a; i++) {
       sum += i;
     }
   } else return a;
   return sum;
}

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  const s3 = s1 + s2;
  let s4 = '';
  for(let i = 0; i < s3.length; i++){
     if(s4.includes(s3[i]) === false){
      s4 += s3[i]
    }
  }
  return s4.split('').sort().join('');
}


// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
function nbYear(p0, percent, aug, p) {
  percent = percent/100;
  let pop = p0;
  let years = 0;
  console.log(p0, percent, aug, p)
  do {
    pop = Math.trunc(pop +(pop * percent) + aug)
    years += 1
  } while (pop < p)
  return years;
}

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
const findNextSquare = (sq) => (Math.sqrt(sq) % 1 === 0) ? (Math.sqrt(sq) +1)*(Math.sqrt(sq)+1) : -1; 

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
const find_average = array =>  array.length > 0 ? array.reduce((a,b)=>a+b) / array.length : 0;

// Make a simple function called greet that returns the most-famous "hello world!".
const greets = _ => 'hello world!'

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  if (!input || input.length === 0) {return [];}
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count += 1;
    } else {
      sum += input[i]
    }
  }
  return [count,sum]
}

// Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
const greet = name => (name === "Johnny") ? "Hello, my love!": "Hello, " + name + "!";

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends){
  return friends.filter(friend=> friend.length === 4)
}