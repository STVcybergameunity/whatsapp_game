export const ELEMENTS = {
    ELEMENT_PLAY_BUTTON: null,
    ELEMENT_FIRST_SCREEN: null,
    ELEMENT_SECOND_SCREEN: null,
};

export function initElements() {
    ELEMENTS.ELEMENT_PLAY_BUTTON  = document.getElementById("start-btn");
    ELEMENTS.ELEMENT_FIRST_SCREEN = document.getElementById("first_screen");
    ELEMENTS.ELEMENT_SECOND_SCREEN = document.getElementById("second_screen");
}