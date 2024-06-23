let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

/*
Inside your locations array, add an object.
Inside that object add a key called name with a value of "town square".
*/
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  }
];

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


const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];

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

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update();
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
  update(locations[1]);
}

function goCave() {
    console.log("Going to cave.");
}

function fightDragon() {
    console.log("Fighting dragon.");
}

function fightSlime() {

}

function fightBeast() {

}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeaponIndex < 3) {
    if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
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


/*
Before you can begin to build out your locations array, you will first need to learn about objects.
Objects are an important data type in JavaScript.
The next few steps will be dedicated to learning about them so you will better understand how to
apply them in your project.

Objects are non primitive data types that store key-value pairs.
Non primitive data types are mutable data types that are not undefined, null, boolean, number,
string, or symbol. Mutable means that the data can be changed after it is created.

Here is the basic syntax for an object:

Example Code
{
  key: value
}

----------------------------------------------
Objects are similar to arrays, except that instead of using indexes to access and modify their data,
 you access the data in objects through properties.
Properties consist of a key and a value.
The key is the name of the property, and the value is the data stored in the property.

Here is an example of an object with a single property:
Example Code
const obj = {
  name: "Quincy Larson"
};

const cat = {
  name: "Whiskers"
};

----------------------------------------------
If the property name (key) of an object has a space in it,
you will need to use single or double quotes around the name.

Here is an example of an object with a property name that has a space:
Example Code
const spaceObj = {
  "Space Name": "Kirk",
};

If you tried to write a key without the quotes, it would throw an error:
Example Code
const spaceObj = {
  // Throws an error
  Space Name: "Kirk",
};

const cat = {
  name: "Whiskers",
  "Number of legs": 4 //
};

----------------------------------------------
There are two ways to access the properties of an object:
dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property
you're trying to access ahead of time.

Example Code
object.property;
Here is a sample of using dot notation (.) to read the name property of the developer object:
Example Code
const developer = {
  name: "Jessica",
}
// Output: Jessica
console.log(developer.name);

----------------------------------------------
The second way to access the properties of an object is bracket notation ([]).
If the property of the object you are trying to access has a space in its name,
you will need to use bracket notation.
Example Code
objectName["property name"];

Here is a sample of using bracket notation to read an object's property:

Example Code
const spaceObj = {
  "Space Name": "Kirk",
};

spaceObj["Space Name"]; // "Kirk"
*/


/*
Pass in only the first element of the locations array by adding [0] at the end of the variable.
For example: myFunction(arg[0]);.

This is called bracket notation. Values in an array are accessed by index.
Indices are numerical values and start at 0 - this is called zero-based indexing.
arg[0] would be the first element in the arg array.
e.g. function goTown() {
  update(locations[0]);
}
*/