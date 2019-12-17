//Prompt the user to choose password criteria after clicking on "Generate Password"

function criteriaPrompt() {
    var characterLimit = prompt("How many characters?");
    console.log(characterLimit);

    if (characterLimit < 8) {
        alert("Password length must be greater than 8");
    }

    else if (characterLimit >128) {
        alert("Password length must be less than 128");
    }

    else {

    var numbers = confirm("Do you want to use numbers?");
    console.log(numbers);
    var lowercase = confirm("Do you want to use lowercase letters?");
    console.log(lowercase);
    var uppercase = confirm("Do you want to use uppercase letters?");
    console.log(uppercase);

    }
}

//Create password based off of criteria selected
if (characterLimit < 8) {
    alert("Password length must be greater than 8");
}