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
