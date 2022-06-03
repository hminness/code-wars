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