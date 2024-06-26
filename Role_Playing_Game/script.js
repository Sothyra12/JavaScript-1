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
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
   "button text": ["Go to town square", "Go to town square", "Go to town square"],
   "button functions": [goTown, goTown, easterEgg],
   text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
 },
 {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
 },
 {
   name: "win",
   "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
   "button functions": [restart, restart, restart],
   text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
 },
 {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
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

const monsters = [
  {name: "slime", level: 2, health: 15},
  {name: "fanged beast", level: 8, health: 60},
  {name: "dragon", level: 20, health: 300}
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
  onsterStats.style.display="none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
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
  fighting = 2;
  goFight();
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function attack(){
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " You miss."
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0){
    defeatMonster();
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeaponIndex--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}

function lose() {
  update(locations[5]);
}

function winGame() {
  update(locations[6]);
}

function easterEgg() {
  update(locations[7]);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}

function pickTwo() {
  pick(2);
}
function pickEight() {
  pick(8);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeaponIndex = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}

function dodge(){
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
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
  if (currentWeaponIndex < weapons.length - 1) {
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
  } else {
    text.innerText="You already have the most powerful weapon!";
    button2.innerText="Sell weapon for 15 gold";
    button2.onclick = sellWeapon();
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
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

/*
Step 118
By default, the HTML element that shows the monster's stats has been hidden with CSS. When the player clicks the "Fight dragon" button, the monster's stats should be displayed. You can accomplish this by using the style and display properties on the monsterStats element.

The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.

Here is an example of how to update the display for a paragraph element:

Example Code
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';
*/

/*
The Math object in JavaScript contains static properties and methods for mathematical constants and functions. One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive). Another is Math.floor(), which rounds a given number down to the nearest integer.

Using these, you can generate a random number within a range. For example, this generates a random number between 1 and 5: Math.floor(Math.random() * 5) + 1;.

Following this pattern, use the addition operator (+) to add a random number between 1 and the value of xp to your monsterHealth -= weapons[currentWeaponIndex].power.
*/

/*
In order for the &#x2620; emoticon text to properly display on the page, you will need to use the innerHTML property.

The innerHTML property allows you to access or modify the content inside an HTML element using JavaScript.

Here is an example of updating the content for this paragraph element using the innerHTML property.

Example Code
<p id="demo">This is a paragraph.</p>
Example Code:
document.querySelector("#demo").innerHTML = "Hello, innerHTML!";
*/

/*
If you play the game in its current state you might notice a bug. If your xp is high enough, the getMonsterAttackValue function will return a negative number, which will actually add to your total health when fighting a monster! You can fix this issue by using a ternary operator to ensure negative values are not returned.

The ternary operator is a conditional operator and can be used as a one-line if-else statement. The syntax is: condition ? expressionIfTrue : expressionIfFalse.

Here is an example of returning a value using an if-else statement and a refactored example using a ternary operator:

Example Code:
// if-else statement
if (score > 0) {
  return score
} else {
  return default_score
}

// ternary operator
return score > 0 ? score : default_score

----------------------------------------------
Step 153
The player should hit if either Math.random() > .2 or if the player's health is less than 20.

At the end of your return statement, use the logical OR operator || and check if health is less than 20.

The logical OR operator will use the first value if it is truthy – that is, anything apart from NaN, null, undefined, 0, -0, 0n, "", and false. Otherwise, it will use the second value.

For example: num < 10 || num > 20.


----------------------------------------------
The .includes() method determines if an array contains an element and will return either true or false.

Here is an example of the .includes() syntax:

Example Code
const numbersArray = [1, 2, 3, 4, 5]
const number = 3

if (numbersArray.includes(number)) {
  console.log("The number is in the array.")
}
*/