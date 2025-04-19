//This is a Password Generator Script


//Button Listener
//This function will be called when the button is clicked
document.getElementById("generate-btn").addEventListener("click", function() {

    //Get User Input
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    //Character Sets 
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    //Initialize the character set based on user input

    //Build Character Password Set 
    let characterSet=lowercaseChars;
    if (includeUppercase) characterSet += uppercaseChars;
    if (includeNumbers) characterSet += numberChars;
    if (includeSymbols) characterSet += symbolChars;

    //Generate Passowrd
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    //Display Password
    document.getElementById("generated-password").value = password;
});

//Copy Password to Clipboard
document.getElementById("copy-btn").addEventListener("click", function() {
    const passwordField = document.getElementById("generated-password");
    passwordField.select();
    document.execCommand("copy");
});
