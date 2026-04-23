import { ELEMENTS, USER_ELEMENTS, initElements, CHATS, POSITIVE_WORDS, NEGATIVE_WORDS, STATE, RESPONSES_USER } from "./constants.js";

//wait all is loaded
document.addEventListener("DOMContentLoaded", () => {
    initElements();

    if (ELEMENTS.ELEMENT_PLAY_BUTTON) {
        ELEMENTS.ELEMENT_PLAY_BUTTON.onclick = startGame;
    }

    //enter clicks the send button
    ELEMENTS.ELEMENT_CHAT_INPUT.onkeydown = (e) => {
        if (e.key === "Enter") {
            ELEMENTS.ELEMENT_SEND_BUTTON.click();
        }
    };

    //allows typing
    ELEMENTS.ELEMENT_SEND_BUTTON.onclick = (e) => {
        e.stopPropagation();
        const text = ELEMENTS.ELEMENT_CHAT_INPUT.value;
        if (!text) return;

        CHATS[STATE.CURRENT_USER].push({ from: "me", text: text });
        const div = document.createElement("div");
        div.classList.add("message", "me");
        div.innerHTML = text;
        ELEMENTS.ELEMENT_CHAT_MESSAGES.appendChild(div);
        if (getUserResponse() == "positive"){
            CHATS[STATE.CURRENT_USER].push(RESPONSES_USER.positiveAhmad[0])
            shiftResponses();
        } else if (getUserResponse() == "negative"){
            CHATS[STATE.CURRENT_USER].push(RESPONSES_USER.negativeAhmad[0])
            shiftResponses();
        } else {
            CHATS[STATE.CURRENT_USER].push(RESPONSES_USER.neutralAhmad[0])
            shiftResponses();
        }

        ELEMENTS.ELEMENT_CHAT_INPUT.value = "";
        loadChat(STATE.CURRENT_USER);
        console.log(CHATS)
    };

    function shiftResponses(){
        RESPONSES_USER.positiveAhmad.shift();
        RESPONSES_USER.negativeAhmad.shift();
        RESPONSES_USER.neutralAhmad.shift();
    }

    //will check if the player used a positive or negative word
    function getUserResponse(){

        const textWordCompare = ELEMENTS.ELEMENT_CHAT_INPUT.value.toLowerCase();

        if (POSITIVE_WORDS.some(word => textWordCompare.includes(word))) return "positive"
        if (NEGATIVE_WORDS.some(word => textWordCompare.includes(word))) return "negative"

        return "neutral"
    }
    

    window.onclick = (e) => {
        if (Object.values(USER_ELEMENTS).includes(e.target)) {
            ELEMENTS.ELEMENT_CHAT_HEADER.innerHTML = e.target.innerHTML;
            STATE.CURRENT_USER = e.target.innerHTML;
            changeColor(e.target);
            loadChat(e.target.innerHTML);
        }
    };
});

//reload chat
function loadChat(name) {
    ELEMENTS.ELEMENT_CHAT_HEADER.innerHTML = name;
    ELEMENTS.ELEMENT_CHAT_MESSAGES.innerHTML = ""; // clear old messages

    for (const msg of CHATS[name]) {
        const div = document.createElement("div");
        if (!msg) return
        div.classList.add("message", msg.from);
        div.innerHTML = msg.text;
        ELEMENTS.ELEMENT_CHAT_MESSAGES.appendChild(div);
    }
}

//When start button is pressed
function startGame() {
    ELEMENTS.ELEMENT_FIRST_SCREEN.style.display = "none";
    ELEMENTS.ELEMENT_SECOND_SCREEN.style.display = "block";
}

//unselect all before reselecting
function unselectAllUsers(){

    for(let i = 0; i<Object.keys(USER_ELEMENTS).length; i++){
        const key = Object.keys(USER_ELEMENTS)[i]
        USER_ELEMENTS[key].style.background = "var(--Unselected-color)";
    }

}

//
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