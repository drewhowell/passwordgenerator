//Prompt the user to choose password criteria after clicking on "Generate Password"

function criteriaPrompt() {
    var characterLimit = prompt("How many characters?");
    console.log(characterLimit);

    if (characterLimit < 8) {
        alert("Password length must be greater than 8");
    }

    else if (characterLimit > 128) {
        alert("Password length must be less than 128");
    }

    else {

    var numbers = confirm("Do you want to use numbers?");
    console.log(numbers);
    var lowercase = confirm("Do you want to use lowercase letters?");
    console.log(lowercase);
    var uppercase = confirm("Do you want to use uppercase letters?");
    console.log(uppercase);
    var specialCharacters = confirm("Do you want to use special characters?");
    console.log(specialCharacters);

    generate(characterLimit,numbers,lowercase,uppercase,specialCharacters);

    }

}

//Generate password based on criteria and display on page

function generate(characterLimit,numbers,lowercase,uppercase,specialCharacters) {

    let complexity = characterLimit;

    let values = "";

    let numbersString = "1234567890";

    let lowercaseString = "abcdefghijklmnopqrstuvwxyz";

    let uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let specialCharactersString = "!@#$%^&*()_+";

    let password = "";

    if (numbers === true) {
        values += numbersString;
    }

    if (lowercase === true) {
        values += lowercaseString;
    }

    if (uppercase === true) {
        values += uppercaseString;
    }

    if (specialCharacters === true) {
        values += specialCharactersString;
    }

for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    console.log(password);

    document.getElementById("display").textContent = password;
}


