console.log("hello world")


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Steps ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
//first create DOMCONTENTLOADED
//append the buttons to the input box so output will register in the div. 
//create functions that will add and subtract numbers 
//call functions within the btns 

var total; 
var currentTotal; 
var result = document.getElementById("numberOutputBox");
var plus = document.getElementById("addBtn");
var subtract = document.getElementById("minusBtn");
var userEnterBox = document.getElementById("userNumber")




//adding numbers function
function addingNumbers(){
    //binded user input to output 
    var bindNumber = document.getElementById("userNumber").value;
        document.getElementById("numberOutputBox").textContent = bindNumber;

     total = parseInt(userNumber.value); 
        currentTotal += total; 
    init();

console.log("binded complete, adding now")
console.log(bindNumber)
}


//subtracting numbers function 
function subtractingNumbers(){
    //appended user input to output
    var bindNumber = document.getElementById("userNumber").value;
        document.getElementById("numberOutputBox").textContent = bindNumber;

    total = parseInt(userNumber.value); 
        currentTotal -= total; 
    init();

console.log("binded complete, subtracting now")
console.log(bindNumber)
}



//addition button
document.getElementById("addBtn").addEventListener("click",function(){
console.log("adding completed")

//call the adding function
addingNumbers();
})


//subtraction button 
document.getElementById("minusBtn").addEventListener("click",function(){
console.log("subtracting completed")

//call the subtraction function
subtractingNumbers();
})

//starts running current total 
function start(){
    currentTotal = 0;
    init();
console.log("function started")
}


//DOM Content Loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM is Loaded")
    start(); 
    init();
})

//if statement to color check if its positive or negative
function init() {
    if (currentTotal >= 0) {
        result.style.color = "black";
        result.textContent = currentTotal;
    } else {
        result.style.color = "red";
        result.textContent = currentTotal;
    }; 
console.log("init loaded")
};


