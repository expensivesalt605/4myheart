// Array of cute messages that change each time the button is clicked.
const messages = [
  "whether good day or bad, you make it better just by being you.",
  "I am so very grateful for you.",
  "Your smile is my favorite thing to see.",
  "You are my home, today and always.",
  "I cherish every single moment I'm blessed to share with you.",
  "You're the goat",
];

// Find the buttons and the message box in the page.
const heartButton = document.getElementById("heartButton");
const lovePopupButton = document.getElementById("lovePopupButton");
const closePopup = document.getElementById("closePopup");
const lovePopup = document.getElementById("lovePopup");
const messageBox = document.getElementById("messageBox");

let currentIndex = 0; // Keep track of which message is showing.

heartButton.addEventListener("click", () => {
  // Pick a new message index randomly, but avoid repeating the same one twice in a row.
  let nextIndex = Math.floor(Math.random() * messages.length);
  if (nextIndex === currentIndex) {
    nextIndex = (currentIndex + 1) % messages.length;
  }
  currentIndex = nextIndex;

  // Update the text inside the message box.
  messageBox.innerHTML = `<p>${messages[currentIndex]}</p>`;
});

lovePopupButton.addEventListener("click", () => {
  // Show the popup overlay with the love paragraph.
  lovePopup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
  // Hide the popup when the close button is clicked.
  lovePopup.classList.add("hidden");
});

lovePopup.addEventListener("click", (event) => {
  // Close popup when clicking outside the card area.
  if (event.target === lovePopup) {
    lovePopup.classList.add("hidden");
  }
});

// Add a gentle pulse effect to the button heart when the page loads.
window.addEventListener("load", () => {
  heartButton.classList.add("loaded");
  lovePopupButton.classList.add("loaded");
});
