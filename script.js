let passwordbox = document.getElementById("password");
let length = 10;


let uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lCase = "abcdefghijklmnopqrstuvwxyz"
let num = "1234567890"
let symb ="~!@#$%^&*()-_=+<>?/{}[]|"

let allChars = uCase + lCase + num + symb ;

// function for generating random password 
function generateRandomPassword(){
    let generate = '';
    generate += uCase[Math.floor(Math.random() * uCase.length)]
    generate += lCase[Math.floor(Math.random() * lCase.length)]
    generate += num[Math.floor(Math.random() * num.length)]
    generate += symb[Math.floor(Math.random() * symb.length)]

    while(length > generate.length){
        generate += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordbox.value = generate;

}

//function for copy password
function copyPassword(){
    passwordbox.select();
    document.execCommand("copy")

}




