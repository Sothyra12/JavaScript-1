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

// function padRow(rowNumber, rowCount) {
//     return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
//   }

//     for (let i = 1; i < count; i++) {
//         rows.push(padRow(i, count))
//     }




//07th June 2024
/*
Step 70
Unfortunately, now the bottom of the pyramid has disappeared. This is because you have created another off-by-one error.

Your original loop went for i values from 0 to 7, because count is 8 and your condition requires i to be less than count. Your loop is now running for i values from 1 to 7.

Your loop needs to be updated to run when i is 8, too. Looking at your logic, this means your loop should run when i is less than or equal to count. You can use the less than or equal to operator <= for this.

Update your loop condition to run while i is less than or equal to count.
*/


function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count))
}


/*
An if statement allows you to run a block of code only when a condition is met.
They use the following syntax:
if (condition) {
  logic
}
*/
if (true) {
  console.log("Condition is true");
}

/*
Now the string is no longer printing, because false is not true. But what about other values?
Try changing the condition to the string "false".
*/
if (false) {
  console.log("Condition is true");
}
if ("false") {
  console.log("Condition is true");
}
/*
The text has appeared again! This is because "false" is a string,
which when evaluated to a boolean becomes true. This means "false" is a truthy value.
A truthy value is a value that is considered true when evaluated as a boolean.
Most of the values you encounter in JavaScript will be truthy.

A falsy value is the opposite - a value considered false when evaluated as a boolean.
JavaScript has a defined list of falsy values.
Some of them include false, 0, "", null, undefined, and NaN.

Try changing your if condition to an empty string "", which is a falsy value.
*/
if ("") {
  console.log("Condition is true");
}

/*
Empty strings evaluate to false, making them a falsy value.
JavaScript also has else if statements.
else if statements allow you to check multiple conditions in a single block of code.
They use the following syntax:
if (condition1) {
  // code to run if condition1 is true
} else if (condition2) {
  // code to run if condition2 is true
} else if (condition3) {
  // code to run if condition3 is true
}
*/

/*
Sometimes you will want to run different code when all of the if...else if conditions are false.
You can do this by adding an else block.
An else block will only evaluate if the conditions in the if and else if blocks are not met.
Here the else block is added to the else if block.
if (condition) {
  // this code will run if condition is true
} else if (condition2) {
  // this code will run if the first condition is false
} else {
  // this code will run
  // if the first and second conditions are false
}


if ("") {
  console.log("Condition is true");
} else if (5 > 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}
*/


/*
A while loop will run over and over again until the condition specified is no longer true.
It has the following syntax:
while (condition) {
  logic;
}
*/


/*
Right now, if you change continueLoop to true, your while loop will run forever.
This is called an infinite loop, and you should be careful to avoid these.
An infinite loop can lock up your system, requiring a full restart to escape.

To avoid this, start by using the increment operator to increase the value of
the done variable inside your loop.
*/
let continueLoop = false;
let done = 0;
while (continueLoop) {
  done++;
}

/* The equality operator can lead to some strange behavior in JavaScript.
For example, "0" == 0 is true, even though one is a string and one is a number.

The strict equality operator === is used to check if two values are equal and share the same type.
As a general rule, this is the equality operator you should always use.
With the strict equality operator, "0" === 0 becomes false,
because while they might have the same value of zero, they are not of the same type.
Update your done == count condition to use the strict equality operator.
*/
// while (continueLoop) {
//   done++;
//   if (done === count) {

//   }
// }


/*
To make your pyramid generate again, push the result of calling padRow with done
and count as the arguments to your rows array, similar to what you did in your first loop.
rows.push(padRow(done, count));
*/

/* Your pyramid generator is still working.
However, it could be possible to end up with an infinite loop again.
Because you are only checking if done is not equal to count,
if done were to be larger than count your loop would go on forever.
Update your loop's condition to check if done is less than or equal to count.
let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
}
*/
while (done <= count) {
  done++;
  rows.push(padRow(done, count));
}

/* Using done to track the number of rows that have been generated is functional,
 but you can actually clean up the logic a bit further.
Arrays have a special length property that allows you to see
how many values, or elements, are in the array. You would access this property using syntax like
myArray.length.
Update your condition to check if rows.length is less than or equal to count. */
while (rows.length <= count) {
  done++;
  rows.push(padRow(done, count));
}


/* Now you no longer need your done variable.
Remove the increment operation from your loop, and the variable declaration for done. */
while (rows.length < count){
  rows.push(padRow(rows.length + 1, count));
}


/* Just like addition, there are different operators you can use for subtraction.
The subtraction assignment operator -= subtracts the given value from the current variable value,
then assigns the result back to the variable.
Replace your iterator statement with the correct statement using the subtraction assignment operator.
for (let i = count; i > 0; i = i - 1) {
  rows.push(padRow(i, count));
}
*/
for (let i = count; i > 0; i-=1) {
  rows.push(padRow(i, count));
}

/* Because you are only subtracting one from i, you can use the decrement operator --.
Replace your subtraction assignment with the decrement operator. */
for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}


/* You can actually build the inverted pyramid without needing to loop "backwards" like you did.
To do this, you'll need to learn a couple of new array methods. Start by using const to declare
a numbers variable. Assign it an array with the elements 1, 2, and 3. Then log the numbers array.

const numbers = [1, 2, 3];
console.log(numbers);
*/
/* The .unshift() method of an array allows you to add a value to the beginning of
the array, unlike .push() which adds the value at the end of the array. Here is an example:

const numbers = [1, 2, 3];
numbers.unshift(5);

The numbers array would now be [5, 1, 2, 3].


Use const to declare an unshifted variable,
and assign it the result of calling .unshift() on your numbers array.
Pass 5 as the argument. Then print your unshifted variable.
const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5);
console.log(numbers);
*/

/* Notice that like .push(), .unshift() returns the new length of the array after the element is added.
Arrays also have a .shift() method. This will remove the first element of the array,
unlike .pop() which removes the last element. Here is an example of the .shift() method:

const numbers = [1, 2, 3];
numbers.shift();
The numbers array would be [2, 3]


Declare a shifted variable, assign it the result of calling .shift()
on your numbers array, and print the variable.
const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
*/


/* Your pyramid is no longer inverted.
This is because you are adding new rows to the end of the array.
Update your loop body to add new rows to the beginning of the array.

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

//modified version
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}
*/


/* Use an if statement to check if inverted is true.
Remember that you do not need to use an equality operator here.

for (let i = 1; i <= count; i++) {
  if (inverted){

  }
  rows.unshift(padRow(i, count));
}



Now move your .unshift() call into your if block.
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  }
}
*/