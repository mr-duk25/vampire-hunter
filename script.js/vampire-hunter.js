// Global Variables
let xp = 0;
let health = 100;
let gold = 250;
let currentWeapon = 0;
let fighting;
let creatureHealth;
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
const creatures = [
    {
    name: "bat",
    level: 2,
    health: 15 
    }, 
    {
    name: "wolf",
    level: 8,
    health: 60
    }, 
    {
    name: "Master Vampire",
    level: 20,
    health: 300
    }]
const locations = [
    {
        name: 'town square',
        'button text': ['Visit the blacksmith', 'visit the cave', 'Fight the Master Vampire'],
        'button functions': [visitBlacksmith, visitCave, fightMasterVamp],
        text1: 'You are in the town square. You see a sign that says \'Blacksmith\'.'
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
    }, 
    {
        name: 'fight',
        'button text': ['Attack', 'Dodge', 'Run'],
        'button functions': [attack, dodge, goTown],
        text1: 'You are fighting a creature.'
    },
    {

         name: 'kill creature',
         'button text': ['Go to town square', 'Go to town square', 'Go to town square'],
         'button functions': [goTown, goTown, easterEgg],
        text1: 'The creature screams "Arg!" as it dies. You gain experience points and find gold.'
          
    },
    {
        name: 'lose',
        'button text': ['REPLAY?', 'REPLAY?', 'REPLAY?'],
        'button functions': [restart, restart, restart],
        text1: 'You die. ☠️'
      },
      {
        name: 'win',
        'button text': ['REPLAY?', 'REPLAY?', 'REPLAY?'],
        'button functions': [restart, restart, restart],
        text1: 'You defeated the Master Vampire! YOU WIN THE GAME! 🎉'
      },
      {
        name: 'easter egg',
        'button text': ['2', '8', 'Go to town square?'],
        'button functions': [pickTwo, pickEight, goTown],
        text1: 'You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!'
      }
];

// DOM elements
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button2Color = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const text1 = document.querySelector('#textboxone')
const text2 = document.querySelector('#textboxtwo')
const xpText = document.querySelector('#xpText')
const healthText = document.querySelector('#healthText')
const goldText = document.querySelector('#goldText')
const creatureStats = document.querySelector('#creatureStats')
const creatureName = document.querySelector('#creatureName')
const creatureHealthText = document.querySelector('#creatureHealth')

// initialize buttons
button1.onclick = visitBlacksmith;
button2.onclick = visitCave;
button3.onclick = fightMasterVamp;

// Functions
function update(location) {
    creatureStats.style.display = 'none';
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
    if(currentWeapon < weapons.length - 1) {
        if(gold >= 30) {
            gold -= 30;
            currentWeapon ++;
            goldText.innerText = gold;
            let newWeapon = weapons;
            newWeapon = weapons[currentWeapon].name;
            text1.innerText = `Added ${newWeapon} to your bag`
            inventory.push(newWeapon);
            text1.innerText += '- in your inventory: ' + inventory + '.';
        } else {
            text1.innerText = 'You do not have enough gold to buy a weapon.';
        }
    } else {
        text1.innerText = 'You already have the most powerful weapon!';
        button2.innerText = 'Sell weapon for 15 gold';
        button2.onclick = sellWeapon;
        // button2Color.style.background = '#35a6f2';
    }
}

function sellWeapon() {
    if(inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text1.innerText = 'You sold a ' + currentWeapon + '.';
        text1.innerText += ' In your inventory you have: ' + inventory + '.';
        text2.innerText += ' ' ;
    } else {
        text.innerText = "Don't sell your only weapon!"
    }
}

function goFight() {
    update(locations[3]);
    creatureHealth = creatures[fighting].health;
    creatureStats.style.display = 'block';
    creatureName.innerText = creatures[fighting].name;
    creatureHealthText.innerText = creatures[fighting].health;
}

function fightBat() {
    fighting = 0;
    goFight();
}
function fightWolf() {
    fighting = 1;
    goFight()
}
    

function fightMasterVamp() {
    fighting = 2;
    goFight();
}

function attack() {
    text1.innerText = 'The ' + creatures[fighting].name + ' attacks.';
    text1.innerText += ' You attack it with your ' + weapons[currentWeapon].name + '.';
    health -= getCreatureAttackValue(creatures[fighting].level);
    if(isCreatureHit()) {
    creatureHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text1.innerText += " You miss."
    }
    healthText.innerText = health;
    creatureHealthText.innerText = creatureHealth;
    if (health <= 0){
        lose();
    } else if(creatureHealth <= 0) {
        fighting === 2 ? winGame() : defeatCreature();
    } if(Math.random <= .1 && inventory.length !== 1) {
        text1.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon--;
    }
}
    


function getCreatureAttackValue(level) {
 const hit = (level * 5) - (Math.floor(Math.random() * xp)); 
 console.log(hit);
 return hit > 0 ? hit : 0;
}

function isCreatureHit() {
    return Math.random() > .2 || health < 20;
  }
    
function dodge() {
      text1.innerText = 'You dodge the attack from the ' + creatures[fighting].name
    }

function defeatCreature() {
gold += Math.floor(creatures[fighting].level * 6.7)
xp += creatures[fighting].level
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

function restart() {
xp = 0;
xpText.innerText = xp;
health = 100;
healthText.innerText = health;
gold = 50;
goldText.innerText = gold;
currentWeapon = 0;
inventory = ['slingshot'];
goTown();
}

function easterEgg() {
    update(locations[7]);
}

function pick(guess) {
const numbers = [];
while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11))
}
text1.innerText = "You picked " + guess + ". Here are the random numbers:\n"
for (let i = 0; i < 10; i++) {
    text1.innerText += numbers[i] + "\n";
}
if(numbers.includes(guess)) {
    text1.innerText += "Right! You win 20 gold!"
    gold += 20;
    goldText.innerText = gold;
} else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
} if(health <= 0) {
    lose()
}
}

function pickTwo() {
    pick(2);
}
    
    function pickEight() {
    pick(8);
}