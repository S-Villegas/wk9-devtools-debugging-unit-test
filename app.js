// deck of 52 cards
const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];

// starting deck  
for (const suit of suits) {
    for (const rank of ranks) {
        deck.push(`${rank} of ${suit}`);
    }
}

// Deck is shuffled
function shuffleDeck() {
    const customSort = () => Math.random() - 0.5;
    deck.sort (customSort); 
   
    console.log ('shuffled deck:', deck);
}
// Cards are shuffled to start new game
shuffleDeck();

// each of the 2 players gets 26 cards
const playerAHand = deck.slice(0, 26);
const playerBHand = deck.slice(26);

let playerAScore = 0;
let playerBScore = 0;

let turn = 0;

function playTurn() {
    if (turn < 26) {
        const cardA= playerAHand[turn];
        const cardB = playerBHand[turn];

        // score determination
        const result = compareCards(cardA, cardB);
        if (result === 1) {
            playerAScore++;
        } else if (result === 2) {
            playerBScore++;
        }
        console.log ("this is the score",result)
        // game announcement 
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML += `<p>Turn ${turn + 1}: ${cardA} vs ${cardB} - ${result}</p>`;

        turn++;
    } else {
    
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML += `<p>Final score for each player: Player A: ${playerAScore}, Player B: ${playerBScore}</p>`;
        if (playerAScore > playerBScore) {
            resultDiv.innerHTML += '<p>Player A wins this game!</p>';
        } else if (playerAScore < playerBScore) {
            resultDiv.innerHTML += '<p>Player B wins this game!</p>';
        } else {
            resultDiv.innerHTML += '<p>This game is a tie!</p>';
        }
    }
}

// Compare cards and determine the winner
function compareCards(cardA, cardB) {
    const rankA = ranks.indexOf(cardA.split(' ')[0]);
    const rankB = ranks.indexOf(cardB.split(' ')[0]);

    if (rankA > rankB) {
        return "player A wins"; // player A wins
    } else if (rankA < rankB) {
        return "player B wins"; // player B wins
    } else {
        return 0; // game is a tie
    }
}


