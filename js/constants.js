export const ELEMENTS = {
    ELEMENT_PLAY_BUTTON: null,
    ELEMENT_FIRST_SCREEN: null,
    ELEMENT_SECOND_SCREEN: null,
    ELEMENT_CHAT_HEADER: null,
    ELEMENT_CHAT_INPUT: null,
    ELEMENT_SEND_BUTTON: null,
    ELEMENT_CHAT_MESSAGES: null,
    ELEMENT_QUIT_BUTTON: null,
    ELEMENT_THIRD_SCREEN: null,
    ELEMENT_FOURTH_SCREEN: null,
};

export const STATE = {
    CURRENT_USER: "Ahmad"
}

export const MESSAGE_COUNT = {
    Ahmad: 0,
    Sarah: 0,
    Omar: 0,
    Lina: 0,
    David: 0
};

export const MESSAGE_LIMIT = 5

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

export const CHAT_ID_TO_USER = {
    "chat-Ahmad": "Ahmad",
    "chat-Sarah": "Sarah",
    "chat-Omar": "Omar",
    "chat-Lina": "Lina",
    "chat-David-Item": "David",
};

export const RESPONSES_USER = {
    positiveAhmad: [
        { from: "other", text: "You're a life-saver, so I may have gambled alot of money on a online casino." },
        { from: "other", text: "Thank you, but I still need to find a way to make up the money." },
        { from: "other", text: "That actually helps more than you think." },
        { from: "other", text: "Honestly, I’m glad I told you first." },
        { from: "other", text: "See you later."}
    ],
    negativeAhmad: [
        { from: "other", text: "Could you stop acting like a child?" },
        { from: "other", text: "You're really not helping with this." },
        { from: "other", text: "I don’t have the patience for this at the moment." },
        { from: "other", text: "Why do you always make things harder." },
        { from: "other", text: "Seriously? Stop it!" },
    ],
    neutralAhmad: [
        { from: "other", text: "Please, I really need to tell someone." },
        { from: "other", text: "I don’t know who else to talk to about this." },
        { from: "other", text: "It’s nothing specific, just… something on my mind." },
        { from: "other", text: "There’s just… a lot going on, I guess." },
        { from: "other", text: "It’s… hard to put into words right now." }
    ],
    neutralSarah: [
        {  }
    ]
}

export const POSITIVE_WORDS = [
    "yes", "shure", "np", "omw", "ty", "thank", "good", "yep", "fine", "okay", "try", "bye"
]
export const NEGATIVE_WORDS = [
    "bad", "no", "hate", "terrible", "sad", "angry", "fuck", "die", "kill"
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
    ELEMENTS.ELEMENT_CHAT_MESSAGES = document.querySelector(".chat-messages");
    ELEMENTS.ELEMENT_THIRD_SCREEN = document.getElementById("third_screen");
    ELEMENTS.ELEMENT_FOURTH_SCREEN = document.getElementById("David")
    ELEMENTS.ELEMENT_QUIT_BUTTON = document.getElementById("quit");
    USER_ELEMENTS.ELEMENT_AHMAD = document.getElementById("chat-Ahmad");
    USER_ELEMENTS.ELEMENT_SARAH = document.getElementById("chat-Sarah");
    USER_ELEMENTS.ELEMENT_OMAR = document.getElementById("chat-Omar");
    USER_ELEMENTS.ELEMENT_LINA = document.getElementById("chat-Lina");
    USER_ELEMENTS.ELEMENT_DAVID_ITEM = document.getElementById("chat-David-Item");
}