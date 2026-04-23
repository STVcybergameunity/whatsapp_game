import { ELEMENTS, initElements } from "./constants.js";

document.addEventListener("DOMContentLoaded", () => {
    ELEMENTS.ELEMENT_PLAY_BUTTON = document.getElementById("start-btn");

    if (ELEMENTS.ELEMENT_PLAY_BUTTON) {
        ELEMENTS.ELEMENT_PLAY_BUTTON.onclick = startGame;
    }
});

function startGame() {

    initElements();

    ELEMENTS.ELEMENT_FIRST_SCREEN.style.display = "none";
    ELEMENTS.ELEMENT_SECOND_SCREEN.style.display = "block"

}