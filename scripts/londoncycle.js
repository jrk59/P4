// DEVELOPER: Joseph Kane, IS117-001, Fall 2023
let exs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", "Turpis tincidunt id aliquet risus feugiat in ante metus. ", "Egestas sed tempus urna et. ", "Id nibh tortor id aliquet lectus proin nibh nisl condimentum."]
let moves = ["move", ", move", ", move", ", move",", move",", move",", move",", move",", move",", move"]
let boards = ["new.png","board1.png","board2.png","board3.png","board4.png","board5.png","board6.png","board7.png","board8.png"]

let index = 0;

const bigElement = document.querySelector("#explanation");
const smallElement = document.querySelector("#moves");
const otherElement = document.querySelector("#realboard");

bigElement.firstChild.nodeValue = exs[0];
smallElement.firstChild.nodeValue = "";
document.getElementById("realboard").src = "images/london/"+ boards[index];
document.getElementById("realboard").alt = "The London System, on ply "+ index.toString();

document.addEventListener("DOMContentLoaded", () => {
    const cycleButton = document.querySelector("#next");
    cycleButton.addEventListener("click", () => {
        console.log("button clicked"); //debugging
        if (index < exs.length - 1) {
            index++;
        }
        console.log(index);

        let exthing=""
        for (let i = 0; i < index+1; i++) {
            exthing += exs[i];
        }
        let movething=""
        for (let i = 0; i < index; i++) {
            movething += moves[i];
        }
        bigElement.firstChild.nodeValue = exthing;
        smallElement.firstChild.nodeValue = movething;
        document.getElementById("realboard").src = "images/london/"+ boards[index];
        document.getElementById("realboard").alt = "The London System, on ply "+ index.toString();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cycleButton = document.querySelector("#prev");
    cycleButton.addEventListener("click", () => {
        console.log("button clicked"); //debugging
        if (index > 0) {
            index--;
        }
        console.log(index);

        let exthing=""
        for (let i = 0; i < index+1; i++) {
            exthing += exs[i];
        }
        let movething=""
        for (let i = 0; i < index; i++) {
            movething += moves[i];
        }


        bigElement.firstChild.nodeValue = exthing;
        smallElement.firstChild.nodeValue = movething;
        document.getElementById("realboard").src = "images/london/"+ boards[index];
        document.getElementById("realboard").alt = "The London System, on ply "+ index.toString();
    });
});