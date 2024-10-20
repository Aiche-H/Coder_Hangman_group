# **Styling Guide**

## A Markdown Guide to HTML Styling for the Provided Code

**HTML Structure:**

- **Descriptive IDs:**
  - `resultText`: Used to access the element displaying the game result.
  - `hangmanImage`: Used to access the image element.
  - `wordContainer`: Used to access the container for the word to be guessed.
  - `inputField`: Used to access the input field for user guesses.
- **Descriptive Classes:**
  - `container`: Used to define a general container for the game elements.
  - `resultDefault`: Used to style the initial state of the result text.
  - `wordContainer`: Used to style the container for the word to be guessed.

**Note:** **All IDs and classes follow the camelCase naming convention** for better readability and consistency.

## **CSS Styling:**

- **Consistent Naming Convention:** Use a consistent naming convention for CSS classes and IDs. For example, use camelCase throughout.
- **Use `:root`** for variables that appear multiple times in the CSS file to make modification easier.
- **Specificity:** Avoid overly specific selectors to maintain flexibility and avoid conflicts.
- **Semantic Styling:** Use CSS classes based on the element's meaning or purpose rather than its position or appearance.

## **JavaScript Code:**

- **Comments:** Use clear and concise comments to explain the purpose of functions, variables, and code blocks.
- **Indentation:** Use consistent indentation to improve code readability.
- **Variable Naming:** Use meaningful variable names that reflect their purpose. For example, `guessedLetters` is better than `gl` **allnames of variables in (camelCase)**.
- **Constant Naming:** **Use uppercase with underscores (snake_case) for constant values that won't change throughout the application.** This convention helps visually distinguish constants from variables.
- **Function Organization:** Consider organizing functions into logical groups or modules to enhance code structure.
- **Error Handling:** Implement error handling to gracefully handle unexpected situations and provide informative feedback to the user.
- **Performance Optimization:** If necessary, optimize the code for performance, especially if the game involves complex calculations or animations.
- **formatting:** we will use the format of the [Prettier](https://prettier.io) formatting style.

## **Example:**

### **HTML**

```html

   <section class="container">
      <h2 id="resultText" class="resultDefault">Coder Hangman Game</h2>
      <img id="hangmanImage" src="./Images/Hangman.png" alt="Hangman">
    </section>

    <section class="container">

      <div id="wordContainer" class="wordContainer"></div>
      <input type="text" id="inputField" placeholder="Guess A Letter"
        maxlength="1" />
      </section>
```

### **CSS**

```css
:root {
  --blackish-grey-1: #333333; /* dark grey */
  --creamy-white: #F5F5F5; /* creamy white */
  --box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /*box shadow*/
  --container-white: #ffffff;/* pure white */
  --hangman-green: #8BC34A; /* green tone for correct guesses */
  --hangman-red: #E74C3C; /* red tone for incorrect guesses */
  --font-size: 16px; /* base font size */
}

body {
  fontfamily: Arial, sans-serif;
  textalign: center;
  font-size: var(--font-size);
}

.wordContainer {
  font-size: 24px;
  margin-bottom: 20px;
}

.inputContainer {
  margin-bottom: 20px;
}

.inputElement {
  padding: 5px;
  border: 1px solid #ccc;
}

.submitButton {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.resultContainer {
  margin-bottom: 20px;
}

.resultMessage {
  font-weight: bold;
}

.hangmanImage {
  width: 200px;
  height: 200px;
}
```

### **JS**

```javascript
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
    } else {
      // If it's not a letter, set the text content to the original character
      LETTER_SPAN.textContent = LETTER;
    }
    
    // Append the letter span to the word container
    wordContainer.appendChild(LETTER_SPAN);
  }
}
```

By following these guidelines, you can create a well-structured, visually appealing, and user-friendly Hangman game using semantic HTML tags, consistent camelCase naming, and best practices for CSS and JavaScript, with classes for CSS and IDs for JavaScript.
