// Global Variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick'];
const locations = [
    {
        name: 'town square',
        'button text': ['Visit the blacksmith', 'visit the cave', 'Fight the Master Vampire'],
        'button functions': [visitBlacksmith, visitCave, fightMasterVamp],
        text1: "You are in the town square. You see a sign that says \"Blacksmith\"."
    },
    {
        name: 'store',
        'button text': ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Return to town square'],
        'button functions': [buyHealth, buyWeapon, goTown],
        text1: 'you enter the store.'
    }
];

// DOM elements
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text1 = document.querySelector('#textboxone')
const text2 = document.querySelector('#textboxone')
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
function update(location) {
    button1.innerText = location['button text'][0];
    button2.innerText = location['button text'][1];
    button3.innerText = location['button text'][2];
    button1.onclick = location['button functions'][0];
    button2.onclick = location['button functions'][1];
    button3.onclick = location['button functions'][2];
    text1.innerText = location.text1;
}
function goTown() {
    update(locations[0])
}

function visitBlacksmith() {
update(locations[1])
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

function fightBat() {
    
}
function fightWolf() {

}


