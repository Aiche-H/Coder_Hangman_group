import words from "./words.js";

const INPUT_FIELD = document.getElementById("inputField");
const SUBMIT_BUTTON = document.getElementById("submitButton");
const RESTART_BUTTON = document.getElementById("restartButton");
//const KEYBOARD_KEYS = document.querySelectorAll("");
const RESULT_TEXT = document.getElementById("resultText");
const HANGMAN_IMAGE = document.getElementById("hangmanImage");

let wordContainer = document.getElementById("wordContainer");
let word = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let chances = 8;

/**
 * Creates a word container element and populates it with individual letter spans.
 *
 * @description This function takes the global `word` variable and creates a span element for each letter.
 * It then appends these spans to the `wordContainer` element.
 */
function createWordContainer() {
  // Get the word container element from the DOM
  wordContainer = document.getElementById("wordContainer");
  // Clear the inner HTML of the word container to start fresh
  wordContainer.innerHTML = "";
  // Iterate over each letter in the word
  for (const LETTER of word) {
    // Create a new span element for the current letter
    const LETTER_SPAN = document.createElement("span");
    // Check if the letter is an alphabetical character
    if (/[a-zA-Z]/.test(LETTER)) {
      // If it's a letter, set the text content to an underscore and store the original letter in a data attribute
      LETTER_SPAN.textContent = "_";
      LETTER_SPAN.dataset.original = LETTER;
      // If it's not a letter, set the text content to the original character
    } else {
      LETTER_SPAN.textContent = LETTER;
    }
    // Append the letter span to the word container
    wordContainer.appendChild("LETTER_SPAN");
  }    
}

/**
 * Checks if the player has won the game.
 *
 * @description This function checks if all the letters in the `wordContainer` have been guessed.
 * If all letters have been guessed, it displays a win message and disables the submit button.
 */
function checkWin() {
  for(const LETTER of word) {
    const WORD_SPANS = wordContainer.children;
    let win = true; 
    if (SPAN.textContent === "_"){
      // If it is, set the win variable to false
      win = false;
      // Exit the loop
      break;
    }
  }
  // If the player has won
  if (win){
    // Set the hangman image source to the win image
    HANGMAN_IMAGE.src = "../Images/HangmanWin.png";
    // Set the result text content to a win message
    RESULT_TEXT.textContent = "GG you won!"
    // Set the result text color to green
    RESULT_TEXT.style.color = "lime";
    // Disable the submit button}
    SUBMIT_BUTTON.disabled = true;
  }
}
/**
 * Checks if the player's guess is correct.
 *
 * @description This function takes a letter as input and checks if it has already been guessed.
 * If not, it checks if the letter is in the word. If it is, it updates the word container and checks for a win.
 * If the letter is not in the word, it updates the hangman image and displays an error message.
 */
function checkGuess(letter) {
  // Check if the letter has already been guessed
  // If the letter has already been guessed, display a message
  // If the letter has not been guessed, check if it is in the word
  // If the letter is in the word, update the word container and check for a win
 
  if (guessedLetters.includes(letter)) {
    RESULT_TEXT.textContent = `you already guessed ${Letter.toUpperCase()}!`
  } else if (word.includes(letter)) {
    guessedLetters.push(letter);
    const WORD_SPANS = wordContainer.children;
    for (const SPAN of WORD_SPANS) {
      if (SPAN.dataset.original === letter) {
        SPAN.textContent = letter;
      }
      RESULT_TEXT.textContent = `${letter.toUpperCase()} is correct! :( )`
      RESULT_TEXT.style.color = "green";
      checkWin();
    }
  } else {
    // If the letter is not in the word, update the hangman image and display a message
    updateHangmanImage()
  }
  if (chances === 0) {
    // If the player has run out of chances, end the game
    gameOver();
  }
}

/**
 * Updates the hangman image based on the number of chances remaining.
 *
 * @description This function updates the source of the `HANGMAN_IMAGE` element to display the appropriate hangman image based on the number of chances remaining.
 */

function updateHangmanImage() {
  // Update the source of the HANGMAN_IMAGE element to display the appropriate hangman image based on the number of chances remaining
HANGMAN_IMAGE.src = `../Images/Hangman${8 - chances}.png`;
}

/**
 * Displays the game over message and updates the UI accordingly.
 *
 * @description This function displays the game over message, updates the result text, and adds a game over message to the word container.
 */

function gameOver() {
  // Display the game over message with the correct word
  // Disable the submit button
  SUBMIT_BUTTON.disabled = true;
  // Clear the word container
  wordContainer.innerHTML = "";
  // Create a new paragraph element for the game over message
  // Add the game over message to the word container
  wordContainer.innerHTML = "GAME OVER!";
  // Update the result text color and font size
  RESULT_TEXT.style.color = "red";
  RESULT_TEXT.style.fontSize = "25px";
}

/**
 * Resets the game state and starts a new game.
 *
 * @description This function selects a new word, resets the guessed letters, creates a new word container, and updates the UI to start a new game.
 */

function restartGame() {
  // Select a new word
  word = words[Math.floor(Math.random() * words.length)];
  // Reset the guessed letters array
  guessedLetters = [];
  // Create a new word container
  createWordContainer();
  // Clear the result text
  RESULT_TEXT.textContent = "";
  // Enable the submit button
  SUBMIT_BUTTON.disabled = false;
  // Reset the number of chances
  chances = 8;
  // Reset the hangman image
  HANGMAN_IMAGE.src = "../Images/Hangman.png";
  // Clear the input field
  INPUT_FIELD.value = "";
  // Reset the result text content and style
  RESULT_TEXT.textContent = "Hangman Game";
  RESULT_TEXT.style.color = "black";
}

// Event listeners
/**
 * Adds a keyboard key listener to the given key element.
 *
 * @param {HTMLElement} key The key element to add the listener to.
 */
function addKeyboardKeyListener(key) {
  // Check if the key is the submit key.
  // Add a click event listener to the submit key.
  SUBMIT_BUTTON.addEventListener("click");
    // Get the input value, convert it to lowercase and trim it.
    // Check if the input value is a single letter.
    // If valid, call the checkGuess function with the input value.
    // Clear the input value.
    INPUT_FIELD.value = "";
    // If invalid, display an error message.
    
  // Add a keydown event listener to the document.
    // When the Enter key is pressed, simulate a click on the submit key.
  // Add a click event listener to the key.
    // Get the key's text content and convert it to uppercase.
    // Set the input value to the key's text content.
  // Add a keydown event listener to the document.
    // When a key is pressed that matches the key's text content, simulate a click on the key.
}

/**
 * Adds keyboard key listeners to all keyboard keys.
 */
function addKeyboardKeyListeners() {
  // Iterate over all keyboard keys and add a listener to each one.
}

/**
 * Adds a click event listener to the restart button.
 */
function addRestartButtonListener() {
  // Add a click event listener to the restart button to restart the game.
  RESTART_BUTTON.addEventListener("click");
}

/**
 * Adds a keydown event listener to listen for the Backspace key.
 */
function addBackspaceKeyListener() {
  // Add a keydown event listener to listen for the Backspace key.
  // When the Backspace key is pressed, restart the game.
}

// Call the addKeyboardKeyListeners functions
addKeyboardKeyListeners();
addRestartButtonListener();
addBackspaceKeyListener();

// Create the word container
createWordContainer();
