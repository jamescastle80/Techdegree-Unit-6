//variables
let phrase = document.getElementById('phrase');
let qwerty = document.getElementById('qwerty');
let phraseUl = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
const start_btn = document.querySelector('.btn_reset');
let chosen = '';
let letter = document.getElementsByClassName('.letter');

//wrong answers
let missed = 0;

// phrases array
const phrases = [
    "As good as it gets",
    "A few good men",
    "Terms of endearment",
    "Easy Rider",
    "The Shining"
];

// listen for game start
start_btn.addEventListener('click', () => {
    if (start_btn.textContent === 'Start Game') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'none';
    }
});


// retrun a random phrase from an array
function getRandomPhrase(arr) {
    let choice = Math.floor(Math.random() * arr.length);
    return phrases[choice];
  //  console.log(phrases[choice]);
}

let phrasePick = getRandomPhrase(phrases);

// add the letters of string to display
function addPhraseToDisplay(phrasePick) {
    for ( let i = 0; i < phrasePick.length; i ++ ) {
        let letter = phrasePick[i];
        let li = document.createElement('li');
        li.textContent = letter;
        if (letter !== ' ') {
            li.className = 'letter';
            phraseUl.appendChild(li);
        } else {
            li.className = 'space';
            phraseUl.appendChild(li);
        }
    }
}

addPhraseToDisplay(phrasePick);

// listen for the on screen keyboard to be clicked

    qwerty.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            let chosenLetter = e.target.textContent;
            const button = e.target;
            button.className = 'chosen';
            button.disabled = true;
            console.log(chosenLetter);
        }
    });
  

// check if a letter is in the phrase
function checkLetter(chosenLetter) {
    for ( let i = 0; i < phrasePick.length; i ++ ) {
        let letter = phrasePick[i];
        if (letter === chosenLetter) {
            letter.className = '.show';
        }
    }
}

checkLetter();






// check if game is won or lost
function checkWin() {

}

// reset game
function reset() {

}