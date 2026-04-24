import { ELEMENTS, USER_ELEMENTS, initElements, CHATS, POSITIVE_WORDS, NEGATIVE_WORDS, STATE, RESPONSES_USER } from "./constants.js";

let maxScore = 0
let score = 0

// Main entry point: wait until the page is ready
document.addEventListener("DOMContentLoaded", () => {
    initElements();
    setupEventListeners();
});

function setupEventListeners() {
    if (ELEMENTS.ELEMENT_PLAY_BUTTON) {
        ELEMENTS.ELEMENT_PLAY_BUTTON.onclick = startGame;
    }

    ELEMENTS.ELEMENT_CHAT_INPUT.onkeydown = handleChatInputKeyDown;
    ELEMENTS.ELEMENT_SEND_BUTTON.onclick = handleSendButtonClick;

    const chatSidebar = document.querySelector(".chat-sidebar");
    
    if (chatSidebar) {
        chatSidebar.addEventListener("click", handleChatSidebarClick);
        
        ELEMENTS.ELEMENT_QUIT_BUTTON.addEventListener("click", function(event) {
            if (maxScore >= 5) {
                handleQuitButtonClick(event);
            }else{
                alert("You need to atleast 5 questions before going to results")
            }
        });
    }
}

function updateScoreBar() {
    const circleFill = document.getElementById("circle-fill");
    const scoreText = document.getElementById("score-text");
    if (!circleFill || !scoreText) return;

    const percentage = maxScore === 0 ? 0 : (score / maxScore) * 100;
    const isLessOrEqual50 = percentage <= 50;

    const displayPercent = Math.abs(Math.round(percentage));
    const clamped = Math.min(displayPercent, 100);

    circleFill.style.strokeDasharray = `${clamped}, 100`;
    circleFill.style.stroke = isLessOrEqual50 ? "#e74c3c" : "#25D366";
    scoreText.textContent =  displayPercent + "%";
}

function handleChatInputKeyDown(event) {
    if (event.key === "Enter") {
        ELEMENTS.ELEMENT_SEND_BUTTON.click();
    }
}

function handleQuitButtonClick(event) {
    event.stopPropagation();
    ELEMENTS.ELEMENT_SECOND_SCREEN.style.display = "none";
    ELEMENTS.ELEMENT_THIRD_SCREEN.classList.add("active");
    updateScoreBar();
}

function handleSendButtonClick(event) {
    event.stopPropagation();
    const text = ELEMENTS.ELEMENT_CHAT_INPUT.value.trim();
    if (!text) {
        return;
    }

    addMessageToChat(text, "me");

    const sentiment = getUserResponse(text);
    const responseKey = `${sentiment}${STATE.CURRENT_USER}`;
    const responseQueue = RESPONSES_USER[responseKey] || [];

    if (responseQueue.length > 0) {
        addMessageToChat(responseQueue[0].text, responseQueue[0].from);
        responseQueue.shift();
    }

    ELEMENTS.ELEMENT_CHAT_INPUT.value = "";
    loadChat(STATE.CURRENT_USER);
}

function handleChatSidebarClick(event) {
    const target = event.target.closest("[id^='chat-']");
    if (!target) {
        return;
    }

    const selectedUser = target.id.replace(/^chat-/, "");
    STATE.CURRENT_USER = selectedUser;
    ELEMENTS.ELEMENT_CHAT_HEADER.innerHTML = selectedUser;
    changeColor(target);
    loadChat(selectedUser);
}

function addMessageToChat(text, sender) {
    CHATS[STATE.CURRENT_USER].push({ from: sender, text });
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = text;
    ELEMENTS.ELEMENT_CHAT_MESSAGES.appendChild(messageElement);
}

function getUserResponse(text) {
    const normalizedText = text.toLowerCase();

    if (POSITIVE_WORDS.some((word) => normalizedText.includes(word))) {
        score++
        maxScore++
        return "positive";
    }else if (NEGATIVE_WORDS.some((word) => normalizedText.includes(word))) {
        maxScore++
        return "negative";
    }else{
        score += 0.5
        maxScore++
        return "neutral";
    }
}

// reload the current chat messages
function loadChat(name) {
    ELEMENTS.ELEMENT_CHAT_HEADER.innerHTML = name;
    ELEMENTS.ELEMENT_CHAT_MESSAGES.innerHTML = "";

    const messages = CHATS[name] || [];
    for (const msg of messages) {
        if (!msg) {
            return;
        }

        const div = document.createElement("div");
        div.classList.add("message", msg.from);
        div.innerHTML = msg.text;
        ELEMENTS.ELEMENT_CHAT_MESSAGES.appendChild(div);
    }
}

// show the second screen when the start button is pressed
function startGame() {
    ELEMENTS.ELEMENT_FIRST_SCREEN.style.display = "none";
    ELEMENTS.ELEMENT_SECOND_SCREEN.style.display = "block";
}

// unselect all sidebar users before selecting one
function unselectAllUsers() {
    Object.values(USER_ELEMENTS).forEach((element) => {
        if (element) {
            element.style.background = "var(--Unselected-color)";
        }
    });
}

function changeColor(clicked) {
    unselectAllUsers();
    if (clicked) {
        clicked.style.background = "var(--Selected-color)";
    }
}

//make david has secret with ITEM //rafael was here xoxo