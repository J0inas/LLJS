// global count
let count = 0;

// select value and buttons
// Idea: get all the buttons at once, then loop over each one and do the stuff they need to do
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){
    button.addEventListener("click", function(click){
        // prints exactly which button was clicked and the corresponding class list
        // console.log(click.currentTarget.classList);
        const buttonClass = click.currentTarget.classList;
        if (buttonClass.contains("decrease")){
            count--;
        }
        value.textContent = count;
    })
});
