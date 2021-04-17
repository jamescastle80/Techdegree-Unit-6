const keyboard = document.querySelector('#qwerty');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;

const checkLetter = (button) => {
    let matched = null;
    for (i=0; i < letters.length; i++) {
      if (button === letters[i].textContent.toLowerCase()) {
        letter.classList.add('show');
        matched = true;
      }
    }
      return matched;
  }

  keyboard.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = 'chosen';
      e.target.disabled = true;
      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {
        missed++;
        // code to change heart icon from liveHeart.png to lostHeart.png would go here
        misses.textContent = missed;
      }
      // checkWin() function call would go here
    }
  });