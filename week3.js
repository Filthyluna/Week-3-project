//Part 1
function loopNum() {
  //Create a loop that holds the numbers 1-10
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //Set the conditions so it stops at the end of the array
  for (let i = 0; i < numbers.length; i++) {
    //Print out each number in the array
    console.log(numbers[i]);
  }
}

loopNum();

//Part 2
function odd103(){
  //Make empty array
  const numbers = [];
  //our index starts at 1;
  let i = 1;
  //makes sure while loop stops at 103
  while (i != 103) {
    //Add by 2 to create an odd array
    i += 2;
    //Pushes i into our array through each loop
    numbers.push(i);
  }
  //Prints the array
  console.log(numbers);
}

//Part 3
function arraySum(num) {
  //sum set to 0 or else it will give us NaN
  let sum = 0;
  //loops through given array
  for (let i = 0; i < num.length; i++) {
    //Adds each item to each other until it reaches the end
    sum += num[i];
  }
  //returns the sum after loop ends
  return sum;
}
//Print and test the function using given array
console.log(arraySum([1, 2, 3, 4, 5, 6]));

//Part 4
//Start loop at 9 and make sure to not reach below 0 using >=
//We use i-- to descend from 9 to 0
function descend() {
  for (let i = 9; i >= 0; i--) {
    //
    console.log(i);
  }
}

//Part 5
function factorial(n) {
  //Factorial starts at 1
  let factorial = 1;
  if (n == 0) {
    return n;
  }
  //Loops through descends so it starts from the given number and then ends at 1
  for (let i = n; i >= 1; i--) {
    //multiplies 1 by i
    factorial *= i;
  }
  //returns our factorial answer
  return factorial;
}
//Test
console.log(factorial(8));

//Part 6
function numSum(n) {
  //sum set to 0 or else it will give us NaN
  let sum = 0;
  //loops up until given number and starts at 1 not 0
  for (let i = 1; i <= n; i++) {
    //Adds each item to each other until it reaches the end
    sum += i;
  }
  //returns the sum after loop ends
  return sum;
}

console.log(numSum(6));

//Part 7
function stringZ(string) {
  //Split the string into an array of characters
  let splitStr = string.split("");
  //Loop through the array
  for (let i = 0; i < splitStr.length; i++) {
    //If the index is not divisible by 2 change it to Z
    //You would check this way because the array starts at 0, and every second letter would be odd
    if (i % 2 != 0) {
      //Set the item to Z
      splitStr[i] = "Z"
    }
  }
  //Return the full string by joining it
  return splitStr.join("");
}
//Tests
console.log(stringZ("donut"));
console.log(stringZ("screwdriver"))