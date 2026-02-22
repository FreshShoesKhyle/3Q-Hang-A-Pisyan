//I cleaned up the comments -Prekus

//Adding more words to his hangman game would make it have more replayability but we are limiting ourselves to words that don't have repeating letters
const wordArray = [
    "model", "graph", "method", "framework", "bias",
    "chart", "trend", "vacuole", "plant", "phylum",
    "reptile", "virus", "genus", "family", "domain",
    "xylem", "muscle", "pathogen", "vein", "gland"
]; 

//These are our Game Variables, they are set to let as we are going to be changing (adding and subtracting) stuff from them
let usedLetters = [];
let revealedLetters = [];
let playerLives = 5; 

const randomIndex = generateRandomIndex(); 
const chosenWord = wordArray[randomIndex]; 

//created this function so it'll look better on index (it's just makeblanks and update lives)
function playHangman() {
    makeBlanks();
    updateLives();
}

function keyBoardLetter(letterClicked, button) {
    letterClicked = letterClicked.toLowerCase(); //Takes the letter clicked and makes it all lowerCase 

    if (!usedLetters.includes(letterClicked)) 
    {
        usedLetters.push(letterClicked);
        //Disable the button
        button.disabled = true; 
        button.style.opacity = "0.5"; 
        button.style.cursor = "not-allowed";

        checkLetter(letterClicked);
    }
}

function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random() * wordArray.length); 
}

function makeBlanks() {
    revealedLetters = []; //Set it to empty because the player still hasn't revealed any letters in the word

    for (let i = 0; i < chosenWord.length; i++) {
        revealedLetters.push("_");
    }

    wordDisplay();
}

function checkLetter(letter) {
    let letterUsed = false;

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] == letter) {
            revealedLetters[i] = letter;
            letterUsed = true;
        }
    }

    if (letterUsed == false) {
        playerLives--;
    }

    wordDisplay();
    checkIfPlayerWin();
}

function wordDisplay() {
    document.getElementById("revealedLetters").innerText = revealedLetters.join(" ");

    updateLives();
}

function updateLives() {
     document.getElementById("playerLives").innerText = playerLives;
}
    
function checkIfPlayerWin() {
    if (!revealedLetters.includes("_")) {
        alert("YOU WIN");
    }

    if (playerLives <= 0) {
        alert("YOU LOSE! The word was: " + chosenWord);
    }
}


