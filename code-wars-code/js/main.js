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

