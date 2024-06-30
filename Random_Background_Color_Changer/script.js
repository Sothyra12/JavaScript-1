/*
Step 1
CamperBot is trying to build out a random background color changer. But they keep running into issues and need your help to debug the code.

CamperBot has already added the HTML and CSS for the project. But they are confused as to why none of the styles and content is showing up on the page.

When they open up the console they see this message:

Example Code
SyntaxError: unknown: Unexpected token, expected "," (5:2)
Syntax errors are thrown when the JavaScript engine encounters something it can't interpret. In this case, it looks like CamperBot has syntax errors in the darkColorsArr array.

Fix the syntax errors in the darkColorsArr array and you should see the content and styles show up on the page.

const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C"
  "#616A6B"
  "#4A235A"
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
*/

const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];


/*
Step 2
Now, CamperBot is trying to create a function that will return a random index from the darkColorsArr. But they have run into the following error message:

Example Code
Uncaught ReferenceError: math is not defined
A ReferenceError is thrown when a non-existent variable is referenced. In this case, it looks like CamperBot is trying to use math but JavaScript doesn't have a math object.

Fix CamperBot's error in the math.random() line and open up the console again.
*/

// function getRandomIndex() {
//     console.log(darkColorsArr.length * Math.random());
//   }
// getRandomIndex();


/*
Step 3
Now that the ReferenceError is resolved, the console is displaying the correct results for a random number between 0 and 9. But CamperBot was not expecting to see decimal numbers like these:

Example Code
0.015882899879771095
2.114596286197641
6.040964780197666
Update the console statement to print a whole number between 0 and 9.

Remember that you worked with a method in the Role Playing Game that rounds a number down to the nearest whole number.
*/

function getRandomIndex() {
    console.log(Math.floor(darkColorsArr.length * Math.random()));
}
getRandomIndex();


/*
Step 4
CamperBot is finished with building out the getRandomIndex function and it is working as expected.

But now they are running into this issue when trying to create a reference to the body element in the DOM:

Example Code
Uncaught TypeError: document.queryselector is not a function
A TypeError means that the code is trying to perform an operation on a value that is not of the expected type.

Fix the TypeError by updating the document.queryselector method to the correct method name that selects an element from the DOM.

const body = document.queryselector("body");
*/

//const body = document.querySelector("body");


/*
Step 5
CamperBot has created a new variable called bgHexCodeSpanElement to store the reference to the span element with the id of bg-hex-code. However, when they try to log that variable to the console, they get null.

null is a special value in JavaScript that represents the absence of a value. This can happen when you try to access a property of an object that doesn't exist.

In this case, CamperBot is not passing in the correct selector to the document.querySelector method.

Fix the document.querySelector("bg-hex-code") line so that it correctly selects the element with the id of bg-hex-code.

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

console.log(bgHexCodeSpanElement);
*/

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

console.log(bgHexCodeSpanElement);



/*
Step 6
CamperBot has now created a function called changeBackgroundColor that changes the background color of the page to a random color from the darkColorsArr array. The function also displays the hex code for that new color.

When they try to test out this function, they notice that the background color is not changing and the text shows the following:

Example Code
Hex Code: undefined
undefined is showing up here because the color variable is not being set correctly.

Fix the error in the darkColorsArr[getRandomIndex] line so that the color variable is set to a random color from the darkColorsArr array.

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
changeBackgroundColor();
*/

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}
changeBackgroundColor();



/*
Step 7
CamperBot is trying to create a new variable called btn to store the reference to the button element with the id of click-btn

However, when they try to log the button element to the console, they see that the button element is null.

Open up the index.html to see the correct id name for that button element.

Then fix the error for the document.querySelector("#click-btn"); line.

const btn = document.querySelector("#click-btn");
console.log(btn);
*/

const btn = document.querySelector("#btn");
console.log(btn);



/*
Step 8
CamperBot has finished building out their random background color changer. However, when they click the button, the background color does not change.

It looks like they are trying to use the onclick property but they are using it incorrectly. The onclick property should be assigned a function reference.

Fix the error in the btn.onclick = changeBackgroundColor(); line.

Remember that you worked with the onclick property in the Role playing game project. Look back at the final solution to see how onclick was properly used.

Once you fix that final bug, the random background color changer will be complete!

btn.onclick = changeBackgroundColor();
*/

btn.onclick = changeBackgroundColor;