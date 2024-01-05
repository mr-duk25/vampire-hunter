// Global Variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['slingshot'];
const weapons = [
    {
        name: 'slingshot',
        power: 5
    }, 
    {
        name: 'medievil dagger',
        power: 30
    }, 
    {
        name: 'Imperial spear',
        power: 50
    }, 
    {
        name: 'Silver Broadsword',
        power: 100
    }];
const locations = [
    {
        name: 'town square',
        'button text': ['Visit the blacksmith', 'visit the cave', 'Fight the Master Vampire'],
        'button functions': [visitBlacksmith, visitCave, fightMasterVamp],
        text1: "You are in the town square. You see a sign that says \"Blacksmith\"."
    },
    {
        name: 'store',
        'button text': ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)', 'Go to town square'],
        'button functions': [buyHealth, buyWeapon, goTown],
        text1: 'you enter the store.'
    },
    {
        name: 'cave',
        'button text': ['Fight bat', 'Fight wolf', 'Go to town square'],
        'button functions': [fightBat, fightWolf, goTown],
        text1: 'You enter the cave. You see some creatures'
    }
];

// DOM elements
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text1 = document.querySelector('#textboxone')
const text2 = document.querySelector('#textboxtwo')
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
update(locations[2])
}
function fightMasterVamp() {
    console.log('Going to fight the Master Vampire.')
}

function buyHealth() {
if(gold >= 10) {
    gold -= 10;
        health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    text2.innerText = '+10 HP!'
    setTimeout(() => {
        text2.innerText = ' ';
        console.log('Delayed for 1 second.');
    }, 1000);;
} else {
    text1.innerText = 'Not enough gold, traveler.';
}

}
function buyWeapon() {
    if(gold >= 30) {
        gold -= 30;
        currentWeapon ++;
        goldText.innerText = gold;
        let newWeapon = weapons;
        newWeapon = weapons[currentWeapon].name;
        text1.innerText = `Added ${newWeapon} to your bag`
        inventory.push(newWeapon);
        text2.innerText = '- in your inventory: ' + inventory + '.';
    }
}

function fightBat() {
    
}
function fightWolf() {

}


