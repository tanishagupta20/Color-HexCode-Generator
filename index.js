let button = document.getElementById("btn");
let hex = document.getElementById("hexCode");
function changeColor() {
    let maxHex = 0xFFFFFF;
    let randomNo = Math.floor(Math.random() * maxHex);
    let randomHex = randomNo.toString(16);
    let randomColor = randomHex.padStart(6, 0);
    hex.innerHTML = `${randomColor.toUpperCase()}`;
    document.body.style.backgroundColor = "#" + randomColor; 
}