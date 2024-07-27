const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
/*
In programming, prefixing a variable with is or has is a common practice to signify t
hat the variable represents a boolean value.
Here are a few examples:
Example Code
let isRunning = true;
let hasCompleted = false;
*/
let isError = false;

/*
NOTE: Values from an HTML input field are received as strings in JavaScript.
You'll need to convert these strings into numbers before performing any calculations.
*/

/*
To match specific characters in a string, you can use Regular Expressions or "regex" for short.
Regex in JavaScript is indicated by a pattern wrapped in forward slashes.
The following example will match the string literal "hello":
Example Code
const regex = /hello/;

*Note that you need to use the backslash \ character to escape the + symbol
because it has a special meaning in regular expressions. "const regex = /\+-/;"

*In regex, shorthand character classes allow you to match specific characters without having to write
those characters in your pattern. Shorthand character classes are preceded with a backslash (\).
The character class \s will match any whitespace character. Add this to your regex pattern.

*Your current pattern won't work just yet.
/+-\s/ looks for +, -, and a space in order.
This would match +- hello but would not match +hello.
To tell the pattern to match each of these characters individually,
you need to turn them into a character class.
This is done by wrapping the characters you want to match in brackets.
For example, this pattern will match the characters h, e, l, or o:
Example Code
const regex = /[helo]/;

*Regex can also take specific flags to alter the pattern matching behavior.
Flags are added after the closing /.
The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match.
Here is an example:
Example Code
const helloRegex = /hello/g;

*JavaScript provides a .replace() method that enables you to replace characters in a string with another string. \
This method accepts two arguments. The first argument is the character sequence to be replaced,
which can be either a string or a regex pattern.
The second argument is the string that replaces the matched sequence.
Since strings are immutable, the replace method returns a new string with the replaced characters.
In this example, the replace method is used to replace all instances of the letter l with the number
1 in the string hello.
Example Code
"hello".replace(/l/g, "1");
*/
function cleanInputString(str) {
    //console.log("original string: ", str);
    const regex = /[+-\s]/g;
    //Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.
    return str.replace(regex, '');
}
//console.log(cleanInputString("+-99"));


/*
In HTML, number inputs allow for exponential notation (such as 1e10). You need to filter those out.
Start by creating a function called isInvalidInput – it should take a single str parameter.

*The e in a number input can also be an uppercase E.
Regex has a flag for this, however – the i flag, which stands for "insensitive".
Example Code
/Hello/i
The following regex would match hello, Hello, HELLO, and even hElLo because of the i flag.
This flag makes your pattern case-insensitive.

*Number inputs only allow the e to occur between two digits.
To match any number, you can use the character class [0-9].
This will match any digit between 0 and 9.

*The + modifier in a regex allows you to match a pattern that occurs one or more times.
To match your digit pattern one or more times, add a plus after each of the digit character classes.
For example: [0-9]+.

*There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes
with this shorthand.


*Strings have a .match() method, which takes a regex argument.
.match() will return an array of match results – containing either the first match,
or all matches if the global flag is used.
Example Code
const str = 'example string';
const regex = /example/;
const result = str.match(regex); // Returns ['example']
*/
function isInvalidInput(str) {
    const regex = /[0-9]+e[0-9]+/i;
    return str.match(regex);
}

//tested invalid input
console.log(isInvalidInput("1e3"));
/*
When you open the console, you should see this result:
Example Code
[ '1e3', index: 0, input: '1e3', groups: undefined ]
The match method returns an array with any matches found in the string.
Here is a complete breakdown of that information:
"1e3" is the matched value against the /\d+e\d+/i regex.
index: 0 is the index of the matched value in the string.
input: '1e3' is the original string that was matched.
groups: undefined are the matched groups, which are not used in this case.
*/


//tested valid input
console.log(isInvalidInput("10"));
/*
When you open the console, you should see the result of null. T
he match method returns null when no match is found. In this case,
the isInvalidInput function should return null when the input is a valid number without any scientific notation.
null in JavaScript is a special primitive that represents the intentional absence of a value.
In a boolean context, null is considered falsy which evaluates to false in a conditional statement.
*/


/*
JavaScript has a feature called template literals,
which allow you to interpolate variables directly within a string.
Template literals are denoted with backticks ``, as opposed to single or double quotes.
Variables can be passed in to a template literal by surrounding the variable with ${} –
the value of the variable will be inserted into the string.
For example:
Example Code
const name = "Naomi";
const templateLiteral = `Hello, my name is ${name}~!`;
console.log(templateLiteral);


*You will want to number the entries a user adds.
To get all of the number inputs, you can use the querySelectorAll() method.
The querySelectorAll() method returns a NodeList of all the elements that match the selector.
A NodeList is an array-like object, so you can access the elements using bracket notation.
Declare an entryNumber variable and give it the value of targetInputContainer.querySelectorAll().
You do not need to pass an argument to the query selector yet.

*Each entry will have a text input for the entry's name,
and a number input for the calories. To get a count of the number of entries,
you can query by text inputs. Note that you cannot query by number inputs,
as you have an extra number input for the user's calorie budget.
Pass the string input[type="text"] to the querySelectorAll() method.
Remember that you will need to use single quotes for your string, so that you can use double quotes within.
This will return a NodeList of all the text inputs in the form. You can then access the length
property of the NodeList to get the number of entries. Do this on the same line.
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
}

*Now you need to build your dynamic HTML string to add to the webpage.
Declare a new HTMLString variable, and assign it an empty template literal string.

*Give your label element a for attribute with the value X-#-name,
where X is the value of the entryDropdown element and # is the value of
entryNumber. Remember that HTML attributes should be wrapped in double quotes.



**To see your new HTML content for the targetInputContainer,
you will need to use the innerHTML property.

The innerHTML property sets or returns the HTML content inside an element.
Here is a form element with a label and input element nested inside.
Example Code
<form id="form">
  <label for="first-name">First name</label>
  <input id="first-name" type="text">
</form>

**If you want to add another label and input element inside the form,
then you can use the innerHTML property as shown below:
Example Code
const formElement = document.getElementById("form");
const formContent = `
  <label for="last-name">Last name</label>
  <input id="last-name" type="text">
`;
formElement.innerHTML += formContent;


****Try adding a couple of entries to the Breakfast category,
and you may notice some bugs! The first thing we need to fix is the entry counts –
the first entry should have a count of 1, not 0.
This bug occurs because you are querying for input[type="text"] elements
before adding the new entry to the page.
To fix this, update your entryNumber variable to be the value of the length of the query plus 1.
Add this on your declaration line, not in your template strings.


**Your other bug occurs if you add a Breakfast entry, fill it in,
then add a second Breakfast entry. You'll see that the values you added disappeared.
This is because you are updating innerHTML directly, which does not preserve your input content.
Change your innerHTML assignment to use the insertAdjacentHTML() method of targetInputContainer instead.
Do not pass any arguments yet.

**The insertAdjacentHtml method takes two arguments.
The first argument is a string that specifies the position of the inserted element.
The second argument is a string containing the HTML to be inserted.
For the first argument, pass the string "beforeend"
to insert the new element as the last child of targetInputContainer.
For the second argument, pass your HTMLString variable.

*/

function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  //targetInputContainer.innerHTML += HTMLString;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}



/*
Step 52
In the Role Playing Game project, you learned how to set a button's behavior by editing its onclick property. You can also edit an element's behavior by adding an event listener.

The following example uses the addEventListener method to add a click event to a button. When the button is clicked, the printName function is called.

Example Code
<button class="btn">Print name</button>
Example Code
const button = document.querySelector('.btn');
function printName() {
  console.log("Jessica");
}
button.addEventListener('click', printName);

*/
addEntryButton.addEventListener('click', addEntry);



/*
**Great! Now you can add entries without losing your previous inputs.
Your next step is to write a function that will get the calorie counts from the user's entries.
Declare a getCaloriesFromInputs function, and give it a parameter called list.


**The list parameter is going to be the result of a query selector,
which will return a NodeList. A NodeList is a list of elements like an array. It contains the elements that match the query selector. You will need to loop through these elements in the list.
In previous steps, you learned how to loop through an array using a for loop. You can also use a for...of loop to loop through an array and a NodeList.
A for...of loop is used to iterate over elements in an iterable object like an array. The variable declared in the loop represents the current element being iterated over.
*/
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list){
    console.log(list);
  }
}