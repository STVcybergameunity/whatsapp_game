import { ELEMENTS, USER_ELEMENTS, initElements } from "./constants.js";

document.addEventListener("DOMContentLoaded", () => {
    initElements(); // ← move this here so all elements are ready

    if (ELEMENTS.ELEMENT_PLAY_BUTTON) {
        ELEMENTS.ELEMENT_PLAY_BUTTON.onclick = startGame;
    }

    window.onclick = (e) => {
        
        if (e.target == )
        ELEMENTS.ELEMENT_CHAT_HEADER.innerHTML = e.target.innerHTML
        console.log(e.target);
        changeColor(e.target);
    };
});

function startGame() {
    ELEMENTS.ELEMENT_FIRST_SCREEN.style.display = "none";
    ELEMENTS.ELEMENT_SECOND_SCREEN.style.display = "block";
}

function unselectAllUsers(){

    for(let i = 0; i<Object.keys(USER_ELEMENTS).length; i++){
        const key = Object.keys(USER_ELEMENTS)[i]
        USER_ELEMENTS[key].style.background = "var(--Unselected-color)";
    }

}

function changeColor(clicked) {
    switch(clicked) {
        case USER_ELEMENTS.ELEMENT_AHMAD:
            unselectAllUsers()
            USER_ELEMENTS.ELEMENT_AHMAD.style.background = "var(--Selected-color)";
            break;
        case USER_ELEMENTS.ELEMENT_SARAH:
            unselectAllUsers()
            USER_ELEMENTS.ELEMENT_SARAH.style.background = "var(--Selected-color)";
            break;
        case USER_ELEMENTS.ELEMENT_OMAR:
            unselectAllUsers()
            USER_ELEMENTS.ELEMENT_OMAR.style.background = "var(--Selected-color)";
            break;
        case USER_ELEMENTS.ELEMENT_LINA:
            unselectAllUsers()
            USER_ELEMENTS.ELEMENT_LINA.style.background = "var(--Selected-color)";
            break;
        case USER_ELEMENTS.ELEMENT_DAVID_ITEM:
            unselectAllUsers()
            USER_ELEMENTS.ELEMENT_DAVID_ITEM.style.background = "var(--Selected-color)";
            break;
        default:
            break;
    }
}