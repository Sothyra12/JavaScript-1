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


**The NodeList values you will pass to list will consist of input elements.
So you will want to look at the value attribute of each element.
Assign item.value to a const variable called currVal.


**You also need to confirm the input is valid.
Declare an invalidInputMatch variable,
and assign it the result of calling your
isInvalidInput function with currVal as the argument.


**Remember that your isInvalidInput function returns String.match,
which is an array of matches or null if no matches are found.
In JavaScript, values can either be truthy or falsy.
A value is truthy if it evaluates to true when converted to a Boolean.
A value is falsy if it evaluates to false when converted to a Boolean.
null is an example of a falsy value.
You need to check if invalidInputMatch is truthy –
you can do this by passing the variable directly to your if condition
(without a comparison operator).
Here's an example of checking the truthiness of helloWorld.


**Browsers have a built in alert() function,
which you can use to display a pop-up message to the user.
The message to display is passed as the argument to the alert() function.
Using a template literal, in your if block,
call the alert() function to tell the user "Invalid Input: ",
followed by the first value in the invalidInputMatch array.

**In programming, null is meant to represent the absence of a value.
In this case, if the user enters an invalid input, you want to alert them and then return null
to indicate that the function has failed.
Still within your if block, set isError to true and return null.



*/
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list){
    const currVal = cleanInputString(item.value);
    let invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch){
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}


/*
**Now it's time to start putting it all together. Declare an empty calculateCalories function,
which takes a parameter named e. This function will be another event listener,
so the first argument passed will be the browser event – e is a common name for this parameter.

**You will be attaching this function to the submit event of the form.
The submit event is triggered when the form is submitted.
The default action of the submit event is to reload the page.
You need to prevent this default action using the preventDefault() method of your e parameter.
Add a line to your calculateCalories function that calls the preventDefault() method on the e parameter.
Then, reset your global error flag to false.

**Your function needs to get the values from the entries the user has added.

Declare a breakfastNumberInputs variable, and give it the value of calling document.querySelectorAll()
with the selector #breakfast input[type=number]. This will return any number inputs that are in the #breakfast element.

**Using that same syntax,
query your number inputs in the #lunch element
and assign them to lunchNumberInputs.

**Following the same pattern, query for your number
inputs in the #dinner, #snacks, and #exercise elements.
Assign them to variables following the naming
scheme of the previous two.

**Now that you have your lists of elements,
you can pass them to your getCaloriesFromInputs function to extract the calorie total.
Declare a breakfastCalories variable, and assign it the result of calling getCaloriesFromInputs
with breakfastNumberInputs as the argument.

**Now declare a lunchCalories variable,
and give it the value of calling getCaloriesFromInputs
with your lunchNumberInputs.

**You also need to get the value of your #budget input.
You already queried this at the top of your code,
and set it to the budgetNumberInput variable.
However, you used getElementById, which returns an Element,
not a NodeList. A NodeList is an array-like,
which means you can iterate through it and it shares some
common methods with an array. For your getCaloriesFromInputs function,
an array will work for the argument just as well as a NodeList does.
Declare a budgetCalories variable and set it to the result of
calling getCaloriesFromInputs – pass an array containing your
budgetNumberInput as the argument.

**You need to know if the user is in a caloric surplus or deficit.
A caloric surplus is when you consume more calories than you burn,
and a caloric deficit is when you burn more calories than you consume.
Burning as many calories as you consume is called maintenance,
and can be thought of as a surplus or deficit of 0, depending on your goals.
Declare a surplusOrDeficit variable.
Then use a ternary operator to set surplusOrDeficit to the string "Surplus" or "Deficit"
depending on whether remainingCalories is less than 0. If it is less than 0,
then surplusOrDeficit should be "Surplus". Otherwise, it should be "Deficit".

**You need to construct the HTML string that will be displayed in the output element.
Start by assigning an empty template literal to the innerHTML property of the output element
on a new line at the end of the function.

**When you need to lower case a string, you can use the toLowerCase() method.
This method returns the calling string value converted to lower case.
Example Code
const firstName = 'JESSICA';
console.log(firstName.toLowerCase()); // Output: jessica
Your output.innerHTML string will need a span element.
Create that, and give it a class attribute set to the surplusOrDeficit variable.
Your surplusOrDeficit variable should be converted to lower case using the toLowerCase() method.
Do not give your span any text yet.

**When the user has a calorie surplus,
the remainingCalories value will be negative.
You don't want to display a negative number in the result string.
Math.abs() is a built-in JavaScript method that will return the absolute value of a number.
Example Code
const num = -5;
Math.abs(num); // 5
In your span text, wrap your remainingCalories reference in Math.abs()
to ensure that the value is positive.

**Now create a p element with the text budgetCalories Calories Budgeted,
using interpolation to replace budgetCalories with the appropriate variable.
This should come after your hr element.

**Using the same interpolation syntax, add a second p element with the text consumedCalories
Calories Consumed and a third with the text exerciseCalories Calories Burned.
output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
`;Remember to replace your consumedCalories and exerciseCalories variables with the appropriate values.


**Finally, you need to make the #output element visible so the user
can see your text. Your output variable is an Element, which has a classList property.
This property has a .remove() method, which accepts a string representing the class to remove from the element.
Example Code
const paragraphElement = document.getElementById('paragraph');
paragraphElement.classList.remove('hide');
Use the .remove() method of the output variable's classList property to remove the hide class.
Don't forget to place the word hide inside quotes.


**If you click on your Calculate Remaining Calories button,
you'll see that nothing happens. You still need to mount the event listener.
Add an event listener to your calorieCounter element.
The event type should be submit, and the callback function should be calculateCalories.

**Your final feature to add is the ability for a user to clear the form.
Start by declaring an empty function called clearForm – it should not take any arguments.

**You need to get all of the input containers. Declare an inputContainers variable, and
assign it to the value of querying the document for all elements with the class input-container.

**Remember that document.querySelectorAll returns a NodeList,
which is array-like but is not an array. However, the Array object has a
.from() method that accepts an array-like and returns an array.
This is helpful when you want access to more robust array methods,
which you will learn about in a future project.
The following example takes a NodeList of li elements and converts it to an array of li elements:
Example Code
<ul>
  <li>List 1</li>
  <li>List 2</li>
  <li>List 3</li>
</ul>

Example Code
  const listItemsArray = Array.from(document.querySelectorAll('li'));
  console.log(listItemsArray); //Output: (3) [li, li, li]
Wrap your inputContainers query selector in Array.from().
Do this on the same line as your declaration.


**It is time for another loop. Create a for...of loop
with a variable called container to iterate through the inputContainers array.
Inside the loop, set the innerHTML property of the container to an empty string.
This will clear all of the contents of that input container.

**After your loop completes, you need to clear the budgetNumberInput.
Set the value property of budgetNumberInput to an empty string.
*/
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
  output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  `;

  output.classList.remove('hide');
}

calorieCounter.addEventListener("submit", calculateCalories);

function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  for (const container of inputContainers) {
    container.innerHTML = '';
  }
  budgetNumberInput.value = '';
}