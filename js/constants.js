export const ELEMENTS = {
    ELEMENT_PLAY_BUTTON: null,
    ELEMENT_FIRST_SCREEN: null,
    ELEMENT_SECOND_SCREEN: null,
    ELEMENT_CHAT_HEADER: null,
};

export const USER_ELEMENTS = {

    ELEMENT_AHMAD: null,
    ELEMENT_SARAH: null,
    ELEMENT_OMAR: null,
    ELEMENT_LINA: null,
    ELEMENT_DAVID_ITEM: null,

}

export function initElements() {
    ELEMENTS.ELEMENT_PLAY_BUTTON  = document.getElementById("start-btn");
    ELEMENTS.ELEMENT_FIRST_SCREEN = document.getElementById("first_screen");
    ELEMENTS.ELEMENT_SECOND_SCREEN = document.getElementById("second_screen");
    ELEMENTS.ELEMENT_CHAT_HEADER = document.getElementById("chat-header")
    USER_ELEMENTS.ELEMENT_AHMAD = document.getElementById("chat-Ahmad");
    USER_ELEMENTS.ELEMENT_SARAH = document.getElementById("chat-Sarah");
    USER_ELEMENTS.ELEMENT_OMAR = document.getElementById("chat-Omar");
    USER_ELEMENTS.ELEMENT_LINA = document.getElementById("chat-Lina");
    USER_ELEMENTS.ELEMENT_DAVID_ITEM = document.getElementById("chat-David-Item");
}