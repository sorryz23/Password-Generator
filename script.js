var characterLength = 8;
var choiceArray = [];

var alphabetLowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetUpperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var Specialcharacters = ['!', '@', ',', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '.', '-', '+', '/', '\', ' | ', ' ? ', ' < ', ' > ', '`'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
function generatePassword() {
    //generatePassword based on the prompts
}
function getPrompts(){
    characterLength = parseInt(prompt("Warning! You need atleast 8 characters a Numeric Number and a Special character.(8 - 128 characters")); //NaN
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character length has to be a number, 8 - 128 digits. Please try again.");
        return false;
    }
    if (confirm("Would you like lowercase letters in your password?")) {
        choiceArray = choiceArray.concat(alphabetLowerCharacters);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
        choiceArray = choiceArray.concat(alphabetUpperCharacters);
    }
    if (confirm("Would you like numbers in your password?")) {
        choiceArray = choiceArray.concat(numbers);
    }
    if (confirm("Would you like special characters in your password?")){
        choiceArray = choiceArray.concat(Specialcharacters);
    }
    return true;
}
