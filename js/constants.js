export const ELEMENTS = {
    ELEMENT_PLAY_BUTTON: null,
    ELEMENT_FIRST_SCREEN: null,
    ELEMENT_SECOND_SCREEN: null,
    ELEMENT_CHAT_HEADER: null,
    ELEMENT_CHAT_INPUT: null,
    ELEMENT_SEND_BUTTON: null,
    ELEMENT_CHAT_MESSAGES: null,
};

export const STATE = {
    CURRENT_USER: "Ahmad"
}

export const CHATS = {
    Ahmad: [
        { from: "other", text: "Hey, are you there?" },
        { from: "me", text: "Yes, what's up?" },
        { from: "other", text: "I did something very stupid, can u keep a secret?" },
    ],
    Sarah: [
        { from: "me", text: "Did you see the game?" },
        { from: "other", text: "Yes it was crazy!" },
    ],
    Omar: [
        { from: "me", text: "Hey, are you ready for the test tomorrow?" },
        { from: "other", text: "Not really, I feel like I still have a lot to study." },
    ],
    Lina: [
        { from: "me", text: "Do you want to grab something to eat after this?" },
        { from: "other", text: "Yeah, I’m starving, let’s go!" },
    ],
    David: [
        { from: "me", text: "Did you finish the assignment yet?" },
        { from: "other", text: "Almost, I just need to review it once more." },
    ],
};

export const RESPONSES_USER = {
    positiveAhmad: [
        { from: "other", text: "You're a life-saver, so I may have gambled alot of money on a online casino." }
    ],
    negativeAhmad: [
        { from: "other", text: "Could you stop acting like a child?" }
    ],
    neutralAhmad: [
        { from: "other", text: "Please, I really need to tell someone." }
    ]
}

export const POSITIVE_WORDS = [
    "yes", "shure", "np", "omw", "ty", "thank", "good", "yep"
]
export const NEGATIVE_WORDS = [
    "bad", "no", "hate", "terrible", "sad", "angry", "nigger"
]

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
    ELEMENTS.ELEMENT_CHAT_INPUT = document.querySelector(".chat-input input");
    ELEMENTS.ELEMENT_SEND_BUTTON = document.querySelector(".chat-input button");
    ELEMENTS.ELEMENT_CHAT_MESSAGES = document.querySelector(".chat-messages")
    USER_ELEMENTS.ELEMENT_AHMAD = document.getElementById("chat-Ahmad");
    USER_ELEMENTS.ELEMENT_SARAH = document.getElementById("chat-Sarah");
    USER_ELEMENTS.ELEMENT_OMAR = document.getElementById("chat-Omar");
    USER_ELEMENTS.ELEMENT_LINA = document.getElementById("chat-Lina");
    USER_ELEMENTS.ELEMENT_DAVID_ITEM = document.getElementById("chat-David-Item");
}