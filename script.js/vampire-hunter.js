// Global Variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];

// DOM elements
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text = document.querySelector('#text')
const xpText = document.querySelector('#xpText')
const healthText = document.querySelector('#healthText')
const goldText = document.querySelector('#goldText')
const monsterStats = document.querySelector('#monsterStats')
const monsterName = document.querySelector('#monsterName')
const monsterHealthText = document.querySelector('#monsterHealth')

// initialize buttons
button1.onclick = visitBlacksmith;
button2.onclick = visitCave;
button3.onclick = fightMasterVamp;

// Functions
function goTown() {
button1.innerText = 'Visit the Blacksmith';
button2.innerText = 'Visit the Cave';
button3.innerText = 'Fight the Master Vampire';
button1.onclick = visitBlacksmith;
button2.onclick = visitCave;
button3.onclick = fightMasterVamp;
text.innerText = "You are in the town square. You see a sign that says \"Blacksmith\"."
}

function visitBlacksmith() {
button1.innerText = 'Buy 10 health (10 gold)';
button2.innerText = 'Buy weapon (30 gold)';
button3.innerText = 'Return to town square';
button1.onclick = buyHealth;
button2.onclick = buyWeapon;
button3.onclick = goTown;
text.innerText = "Blacksmith Cyrus: \"Welcome to the shop, What'll it be\"."
}
function visitCave() {
console.log('Going to Cave.')
}
function fightMasterVamp() {
    console.log('Going to fight the Master Vampire.')
}

function buyHealth() {
console.log('+10 HP!')
}
function buyWeapon() {
console.log('Blacksmith Cyrus: fresh off the iron')
}

