// User input variables

    var enter; 
    
    var confirmSpecial; 
    var confirmNumbers; 
    var confirmUppercase;  
    var confirmLowercase; 

    var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var uppercase = ["A", "A", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var choices;

    var get = document.querySelector("#generateBtn");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});




// Start the function to generate password

function generatePassword() {

    enter = parseInt(prompt ("How many characters you want it to be? 8-128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
       

    enter = parseInt (prompt("Please select between 8 and 128"));


} else {
   
    confirmSpecial = confirm ("Do you want to use special characters?");
    confirmNumber = confirm ("Do you want to use numbers?");
    confirmUppercase = confirm ("Do you want to use Uppercase?");
    confirmLowercase = confirm ("Do you want to use Lowercase?");


// Else if for 4 negative options

} if (!confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

}else if (confirmSpecial && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = special.concat(number, uppercase, lowercase);



 // Else if for 3 positive options

    }else if (confirmNumber && confirmSpecial && confirmUppercase) {
        choices = special.concat(number, uppercase);

    }else if (confirmNumber && confirmSpecial && confirmLowercase) {
        choices = special.concat(number, lowercase);

    }else if (confirmSpecial && confirmLowercase && confirmUppercase) {
        choices = special.concat(lowercase, uppercase); 
    
    }else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase); 

    //Else if for 2 positive options

    }else if (confirmSpecial && confirmNumber) {
        choices = special.concat(number);

    } else if (confirmSpecial && confirmLowercase) {
        choices = special.concat(lowercase);

    } else if (confirmSpecial && confirmUppercase) {
        choices = special.concat(uppercase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowercase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(uppercase);
      
    
     // Else if for 1 positive option

    } else if (confirmSpecial) {
        choices = special;

    }else if (confirmNumber) {
        choices = number;

    }else if (confirmLowercase) {
        choices = lowercase;

    }else if (confirmUppercase) {
        choices = space.concat(uppercase);
    }
    
    
    var password = [];

// Start random selection variables:
// Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }


// This joins the password array and converts it to a string

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// This puts the password value into the textbox

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}




    