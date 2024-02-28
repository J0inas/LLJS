const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color =  document.querySelector(".color");

button.addEventListener("click", function(){
    const bgColor = getRandomHex();

    document.body.style.backgroundColor = bgColor;
    color.textContent = bgColor;
});

function getRandomHex(){
    // sequence contains 6 values of hex array
    let hexSequence = "#";
    for (let i = 0; i < 6; i++){
        hexSequence += hex[getRandomHexElement()];
    }
    console.log(hexSequence);

    return hexSequence;
}

function getRandomHexElement(){
    return Math.floor(Math.random() * hex.length);
}