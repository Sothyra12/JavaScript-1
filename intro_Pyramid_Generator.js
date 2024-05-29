const character = "#";
const count = 8;
const rows = [];

// .repeat() method available to strings.
// This method accepts a number as an argument,
// specifying the number of times to repeat the target string.
// For example, using .repeat() to generate the string "Code! Code! Code!"


//At this point, you're encountering what's known as an off-by-one error,
//a frequent problem in zero-based indexing languages like JavaScript. so andd `1` to the i


//The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.
//A function is a block of code that can be reused throughout your application.
/* The function keyword tells JavaScript that the name variable is going to be a function.
parameter is a variable that represents a value that is passed into the function when it is used.
A function may have as many, or as few, parameters as you'd like.
Like a for loop, the space between the curly braces is the function body.
--= By default, functions return undefined as their value. */

/* When you have a value that is explicitly written in your code,
like the "Hello!" string in your function, it is considered to be hard-coded.
Hard-coding a value inside a function might not make it as reusable as you'd like. */

/* Parameters are special variables that are given a value when you call the function,
and can be used in your function to dynamically change the result of the function's code. */
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i+1));
}
console.log(rows);
let result = "";



for (const row of rows) {
    result = result + "\n" + row;
}
console.log(result);


//Creating a function
function padRow(name) {
    return name;
}
const call = padRow(); // Call the function
console.log(call); // Output: undefined


/* //Creating a function
function padRow() {
    return "hello";
}
const call = padRow(); // Call the function
console.log(call); // Output: undefined */