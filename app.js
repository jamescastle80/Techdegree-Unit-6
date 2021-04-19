//variables
let phrase = document.getElementById('phrase');
let qwerty = document.getElementById('qwerty');
let phraseUl = document.querySelector('#phrase ul');
const overlay = document.getElementById('overlay');
const start_btn = document.querySelector('.btn_reset');
let chosen = '';
let scoreboard = document.getElementById('scoreboard');
let hearts = document.querySelector('.tries');

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
    } else if (start_btn.textContent === 'Play Again') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
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

// check if a letter is in the phrase
function checkLetter(button) {
    let letters = document.querySelectorAll('.letter');
    let match = null;
    for ( let i = 0; i < letters.length; i ++ ) {
        if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show');
            match = true;
        }
    }
    return match;
}

// check if game is won or lost
function checkWin() {
    let letters = document.querySelectorAll('.letter');
    let correct = document.querySelectorAll('.show');
    if (letters.length === correct.length) {
        console.log("You Win!");
        overlay.classList.add('win');
        overlay.firstElementChild.textContent = 'You Win!';
        overlay.style.display = 'flex';
        reset();
    } else if (missed > 4) {
        overlay.classList.add('lose');
        overlay.firstElementChild.textContent = 'You Lose!';
        overlay.style.display = 'flex';
        reset();
    }
}

// reset game
function reset() {
    start_btn.textContent = 'Play Again';
    start_btn.style.color = '#fff';
    missed = 0;
    phraseUl.innerHTML = '';
    let phrasePick = getRandomPhrase(phrases);
    addPhraseToDisplay(phrasePick);
        let chosenLetters = document.querySelectorAll('.chosen');
        for (let i = 0; i < chosenLetters.length; i++) {
        chosenLetters[i].classList.remove('chosen');
        chosenLetters[i].disabled = false;
     }
}
// listen for the on screen keyboard to be clicked

    qwerty.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            button.className = 'chosen';
            button.disabled = true;
            const match = checkLetter(e.target.textContent.toLowerCase());
            if (match === null) {
                missed ++;
                incorrect = hearts.parentNode;
                incorrect.removeChild(incorrect.lastElementChild);
                checkWin();
            } else {
                checkWin();
            }
        }
    });
  