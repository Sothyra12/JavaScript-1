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
    const regex = /[+-\s]/g;
    //Use your regex to replace all instances of +, -, and a space in str with an empty string. Return this value.
    return str.replace(regex, '');
}