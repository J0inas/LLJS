const colors = ["green", "blue", "rgba(133,162,360", "#f1502f"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

// remember - you can write javascript functions inside something like this
// also : what was the f -> syntax again?
button.addEventListener("click",function(){
    // checking if the body is targetted
    // console.log(document.body);

    // get random number between 0 and 3 
    const randomNumber  = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
    // length is an attribute, not a function
}