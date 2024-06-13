let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
const locations = [];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

/*
button1 represents your first button element.
These elements have a special property called onclick,
which you can use to determine what happens when someone clicks that button.

You can access properties in JavaScript a couple of different ways.
The first is with dot notation. Here is an example of using dot notation to set the onclick property
of a button to a function reference.

Example Code
button.onclick = myFunction;

In this example, button is the button element, and myFunction is a reference to a function.
When the button is clicked, myFunction will be called.
*/
//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){

}

function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}
/*
The innerText property controls the text that appears in an HTML element. For example:

Example Code
<p id="info">Demo content</p>
Example Code
const info = document.querySelector("#info");
info.innerText = "Hello World";
The following example would change the text of the p element from Demo content to Hello World.
*/
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function buyHealth() {

}

function buyWeapon() {

}
/*
Example Code
function myFunction(param) {
  console.log(param);
}
Function parameters act as placeholders for values that you pass to the function when you call it.
*/

/*
In your role playing game, you will be able to visit different locations like the store, the cave,
and the town square. You will need to create a data structure that will hold the different locations.

Use const to create a variable called locations and assign it an empty array.
*/