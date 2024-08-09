
//functions can be called before initialization
//funcOne();

//function shcema
//making functions saves blocks of code to be ran when we need it.
//INSTEAD OF IMMEDIATELY RUNING AS THE PAGE LOADS
function funcOne() {
    console.log("Hello World!");
    console.log(5 + 7)
};
//This is how we call function code blocks to run
//ex. funcName();
funcOne();


let numOne = 7
let numTwo = 3
//Scope: whether it's GLOBAL, BLOCK, FUNCTION SCOPE(Local scope)
function addTwoNums() {
    console.log(numOne + numTwo);
};


addTwoNums();

function addTwoNumsV2(a,b) {

    //This function is currently accepting two arguments (args)
    console.log(a + b);
};
//We are sending data inside the arguments spots in functions;
debugger
addTwoNumsV2(numOne, numTwo);

addTwoNumsV2(6,10);

addTwoNumsV2("Hello", " Zach!")

function greeting() {
    console.log("HI");
}
greeting();

function greetingByName(name) {
        console.log("Hello, " + name + "! Welcome to the site.");
    
}
greetingByName("Chris");

function greetingByExcitment(name) {
    //This let vairable is only being seen inside this function
    let upperCaseName = name.toUpperCase();
    console.log(upperCaseName);
    
    //This is sending back the output o fthis function
    return upperCaseName
}

//If you ever need a function to send back new data, You'll need a return
let screamingName = greetingByExcitment("zach");

// upperCaseName
//console.log(upperCaseName);
console.log(`HELLLLOOOOOO ${screamingName} IT'S NORTHERN LIGHT SUPLEX SINGER!!!`)

function sandwhichMaker(typeOfBread, typeOfMeat, typeOfSauce, typeOfVeggie) {
    console.log(
        `Bread: ${typeOfBread} Meat: ${typeOfMeat} Sauce: ${typeOfSauce} Veggie: ${typeOfVeggie}`
    )
}

let zachSandwhich = sandwhichMaker("white", "ham", "mayo", "lettuce") 
let mikeSandwhich = sandwhichMaker("white", "rotessarie chicken", "buffalo")

