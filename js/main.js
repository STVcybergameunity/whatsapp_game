import { ELEMENTS } from "./constants.js";

document.addEventListener("DOMContentLoaded", () => {
    ELEMENTS.ELEMENT_PLAY_BUTTON = document.getElementById("start-btn");

    if (ELEMENTS.ELEMENT_PLAY_BUTTON) {
        ELEMENTS.ELEMENT_PLAY_BUTTON.onclick = startGame;
    }
});

function startGame() {

    ELEMENTS.ELEMENT_PLAY_BUTTON.style.display = "none";
    
}