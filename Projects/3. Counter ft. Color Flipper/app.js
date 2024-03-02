// global count
let count = 0;

// select value and buttons
// Idea: get all the buttons at once, then loop over each one and do the stuff they need to do
const value = document.querySelector("#value");
const goal = document.querySelector("#goal");
const buttons = document.querySelectorAll(".btn");

let goalValue = goal.textContent;

buttons.forEach(function(button){
    button.addEventListener("click", function(click){
        // prints exactly which button was clicked and the corresponding class list
        // console.log(click.currentTarget.classList);
        const eventObject = click.currentTarget.classList;
        if (eventObject.contains("decrease")){
            count--;
        }
        else if(eventObject.contains("increase")){
            count ++;
        }
        else if(eventObject.contains("reset")){
            count = 0;
        }
        if(count < 0){
            value.style.color = "red";
        }
        else if(count > 0){
            value.style.color = "green";
        }
        else {
            value.style.color = "#222";
        }
        value.textContent = count;

        if(count == goalValue){
            goalValue = randomCounterGoal(10);
            console.log(goalValue);
        }
        goal.textContent = goalValue;
    })
});


function randomCounterGoal(range){
    let newCounter = goalValue;
    while (newCounter === goalValue){
        newCounter = Math.floor(Math.random() * range) - (Math.floor(range/2));
    }
    return newCounter;
}
