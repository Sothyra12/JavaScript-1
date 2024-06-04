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


//04/06/2024
/* A function does not have to return a hard-coded value. It can return the value stored in a variable.
Parameters are special variables for a function, so they can also be returned. */

/*
Variables in JavaScript are available in a specific scope.
In other words, where a variable is declared determines where in your code it can be used.
The first scope is the global scope. Variables that are declared outside of any "block" like
a function or for loop are in the global scope. Your character, count, and rows variables are all in
the global scope.

When a variable is in the global scope, a function can access it in its definition.
Here is an example of a function using a global title variable:

const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi")
*/

function padRow(name) {
    return character + name;
}


/*
Variables can also be declared inside a function.
These variables are considered to be in the local scope, or block scope.
A variable declared inside a function can only be used inside that function.
If you try to access it outside of the function, you will either get undefined or an error.
*/

/*
Your test declaration is currently after your return statement.
An important thing to know about the return keyword is that
it does not just define a value to be returned from your function,
it also stops the execution of your function code.
This means that any code after a return statement will not run.

function padRow(name) {

  return character + name;
  const test = "Testing";
}

This is because test is defined in the local scope,
meaning you cannot access it in the global scope (outside of the padRow function).
*/


/*
In order to know how to format a row,
your padRow function will need to know which row number you are on,
and how many rows in total are being generated.

The best way to do this is by creating function parameters for them.
Give your padRow function a rowNumber and rowCount parameter.
Multiple parameters are separated by a comma:

function name(first, second) {

}
*/

function padRow(rowNumber, rowCount) {
    return character.repeat(rowNumber);
}

/*
A function call allows you to actually use a function.
You may not have been aware of it, but the methods like .push()
that you have been using have been function calls.

A function is called by referencing the function's name, and adding ().
Here's how to call a test function:
test();

The values you provide to a function call are referred to as arguments,
and you pass arguments to a function call.
Here's a function call with "Hello" passed as an argument:
test("Hello");
*/

/*
parameters, arguments are separated by a comma.
for (let i = 0; i < count; i += 1) {
  rows.push(padRow(i+1, count))
}

*/


/*
Now it is time for a bit of math. Consider a three-row pyramid. If we want it centered, it would look something like:

··#··
·###·
#####
Empty spaces have been replaced with interpuncts,
or middle dots, for readability.
If you extrapolate the pattern,
you can see that the spaces at the beginning and end of a row follow a pattern.

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}
*/

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }

    for (let i = 1; i < count; i++) {
        rows.push(padRow(i, count))
    }