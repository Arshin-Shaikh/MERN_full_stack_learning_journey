// const red = document.querySelector("#box-1");
// const blue = document.querySelector("#box-2");
// const yellow = document.querySelector("#box-3");
// const green = document.querySelector("#box-4");
const boxes = document.querySelectorAll(".box");
const msg = document.querySelector("#greetings");
const inputElement = document.querySelector("#name");
const Btn = document.querySelector("#btn")

// red.onclick = () => {
//     red.style.backgroundColor = "red";
// };

// blue.onclick = () => {
//     blue.style.backgroundColor = "blue";
// };

// yellow.onclick = () => {
//     yellow.style.backgroundColor = "yellow";
// };

// green.onclick = () => {
//     green.style.backgroundColor = "green";
// };
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.style.backgroundColor = box.innerText.toLowerCase();
    });
});

Btn.onclick = () => {
    const username = inputElement.value.trim();
    if(username !== ''){
        msg.innerText = `Hello ${inputElement.value}`;
    }
    else{
        console.log("Error: Please enter your name and click submit...")
    }
}