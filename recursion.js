// 1. Counting Sheep

// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

const countingSheep = function(sheepNumber) {
  if (sheepNumber === 1) {
    return "All the sheep jumped over the fence.";
  }

  return (
    `${sheepNumber} another sheep jumped over the fence...` +
    countingSheep(sheepNumber - 1)
  );
};

console.log(countingSheep(20));

// 2. Power Calculator

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

const powerCalculator = function(base, exponent) {
  if (exponent === 1) {
    return base;
  }
  return base * powerCalculator(base, exponent - 1);
};

console.log(powerCalculator(10, 4));

// 3. Reverse String

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function(string) {
  if (string.length === 1) {
    return string[0];
  }

  return string.charAt(string.length - 1) + reverseString(string.slice(0, -1));
};

console.log("michael");

// 4. nth Triangular Number

// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const triangleNumber = function(number) {
  if (number === 1) {
    return number;
  }

  return number + triangleNumber(number - 1);
};

console.log(triangleNumber(10));

// 5. String Splitter

// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const stringSplitter = function(input, separator) {
  if (input.length <= 1) {
    input[0] === separator ? input[0] : ",";
  }

  const output = stringSplitter(
    input.substring(1, input.length - 1),
    separator
  );

  return output;
};

console.log(stringSplitter("02/20/2020", "/"));

// 6. Fibonacci

// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = function(num) {
  if (num === 2) {
    return [1, 1];
  }

  let fibArray = fibonacci(num - 1);
  fibArray.push(fibArray[fibArray - 1] + fibArray[fibArray.length - 2]);
};

console.log(fibonacci(10));

// 7. Factorial

// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = function(num) {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

// 8/9. Find a way out of the maze

// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

const solveMaze = function(row, column, directions, maze) {
  if (maze[row][column] == "e") {
    return directions;
  }

  if (column < maze[0].length - 1 && maze[row][column + 1] != "*") {
    maze[row][column] = "*";
    let newColumn = column + 1;
    let newRow = row;
    return (directions = "R" + solveMaze(newRow, newColumn, directions, maze));
  }

  if (row < maze.length - 1 && maze[row + 1][column] != "*") {
    maze[row][column] = "*";
    let newColumn = column;
    let newRow = row + 1;
    return (directions = "D" + solveMaze(newRow, newColumn, directions, maze));
  }

  if (column > 0 && maze[row][column - 1] != "*") {
    maze[row][column] = "*";
    let newColumn = column - 1;
    let newRow = row;
    return (directions = "L" + solveMaze(newRow, newColumn, directions, maze));
  }

  if (row > 0 && maze[row - 1][column] != "*") {
    maze[row][column] = "*";
    let newColumn = column;
    let newRow = row - 1;
    return (directions = "U" + solveMaze(newRow, newColumn, directions, maze));
  }
};

// 10. Anagrams

// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

function anagrams(prefix, input) {
  if (input.length <= 1) {
    let newGram = prefix + input;
    if (!anagramsArr.includes(newGram)) {
      anagramsArr.push(newGram);
    }
  }
  for (let i = 0; i < input.length; i++) {
    const currentString = input.substring(i, i + 1);
    const previous = input.substring(0, i);
    const next = input.substring(i + 1);
    anagrams(prefix + currentString, previous + next);
  }
}

anagrams("", "cow");

// 11. Organization Chart

// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

const organizeEmployees = function(employees, boss) {
  let orgChart = {}; //Set up empty object to put data in
  employees
    .filter(employee => employee.boss === boss) //Find employees who are bossed by current employee
    .forEach(employee => {
      orgChart[employee.id] = organizeEmployees(employees, employee.id);
    });
  return orgChart;
};

let employeesChart = JSON.stringify(organizeEmployees(employees, null));

console.log(employeesChart);

// 12. Binary Representation

// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

function convertToBinary(input) {
  if (input > 0) {
    let binaryFormat = Math.floor(input % 2);
    return convertToBinary(Math.floor(input / 2)) + binaryFormat;
  } else {
    return "";
  }
}
