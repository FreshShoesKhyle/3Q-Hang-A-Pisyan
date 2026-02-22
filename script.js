/*NEW STUFF
.push() method in JavaScript is an array method that adds one or more elements to the end of an array and returns the new length of the array... I searched this up in Google Bro my search history is so full of Function in javascript that ........
*/
const wordArray = [
    "model", "graph", "method", "framework", "bias",
    "chart", "trend", "vacuole", "plant", "phylum",
    "reptile", "virus", "genus", "family", "domain",
    "xylem", "muscle", "pathogen", "vein", "gland"
]; //Word natin, considering to add more

let usedLetters = []; //E update ni code ito kapag may letter na na press, ilagay niya sa loob nito
const randomIndex = generateRandomIndex(); //Ginawa ko na lng const kasi PUTANG INA Hindi naka function mga functions natin so liek easy fix make it universal na lang diba
const chosenWord = wordArray[randomIndex]; //I feel like we can just use wordArray[randomindex] for this but we too lazy to type allat
const lettersArray = [];
let revealedLetters = []; //cannot be const cause we add more stuff here later;
let playerLives = 5; //set this to let cause we gotta -- this later;
//Sa part na ito we kind of only want the letter to be pressed once ok? Feel ko e mix na lng natin ang Keyboard function sa checkiflettterwaspressed 
//Moved this to top cause feel ko lng mas maganda e separate mga function sa design kag fucntion na may function

function keyBoardLetter(letterClicked, button) {
    letterClicked = letterClicked.toLowerCase(); //Takes the letter clicked and makes it all lowerCase (legit in the name lol)

    if (!usedLetters.includes(letterClicked)) {

        usedLetters.push(letterClicked);

        button.disabled = true; //this legit just disables the button, stole this from google searching up "How to disable a button javascript"
        button.style.opacity = "0.5"; //Change of opacity para ma differentiate
        button.style.cursor = "not-allowed";

        checkLetter(letterClicked); //Function is present below
    }
}

function generateRandomIndex() {
    let randomIndex = Math.floor(Math.random() * wordArray.length); //Add code to generate random index
    return randomIndex; //index gets returned
}

function makeBlanks() {
    /*
    Just run array in store letters (could be mixed in as one function but idk
    for now we are just brain storming)

    Thinking of this being a for loop and it output blanks
    */

    //So rememmber iyong datin natin na ge randomindex code (shout out Julline) just copy pasted it here;
    revealedLetters = [];

    for (let i = 0; i < chosenWord.length; i++) {
        revealedLetters.push("_");
    }

    document.getElementById("revealedLetters").innerText = revealedLetters.join(" ");
}

/*

Remove both of this: 

function onBackSpacePress() {
    let currentString = document.getElementById("text").innerText;
    let finalString = currentString.substring(0, currentString.length - 1);
    document.getElementById("text").innerText = finalString;
}

function space() {
    let space1st = document.getElementById("text").innerText;
    let extraSpace = space1st.substring(0, space1st.length + 1);
    document.getElementById("text").innerText = extraSpace;
}
*/
function checkLetter(letter) {
    /*sir kyle said there was function to find letter lowkey so we just use that
    if letter is wrong minus lives*/

    //UPDATE Since I have discovered the shit called TURNING LET INTO CONSR MY LIFE HAS BEEN EASIER
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


//TO ADD LATER
function wordDisplay() {
    let output = "";

    for (let i = 0; i < revealedLetters.length; i++) {
        output += revealedLetters[i] + "";
    }

    document.getElementById("revealedLetters").innerText = output;
}

//Considering if we should add ASCII Art
function checkIfPlayerWin() {
    if (!revealedLetters.includes("_")) {
        alert("YOU WIN");
    }

    if (playerLives <= 0) {
        alert("YOU HAVE LOST");
    }
}
