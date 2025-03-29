const compliments = [
    "You have a great sense of humor!",
    "Your creativity is inspiring!",
    "You are an amazing friend!",
    "Your smile lights up the room!",
    "You have incredible ideas!",
    "You make the world a better place!",
    "You are so thoughtful and kind!",
    "Your positivity is contagious!",
    "You are a natural leader!",
    "You have an amazing perspective on things!"
];

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const container = document.querySelector(".container");

    setTimeout(() => {
        loadingScreen.style.display = "none";
        container.style.display = "block";
    }, 2000); // Simulates a loading delay of 2 seconds

    const button = document.getElementById("generate-button");
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.style.display = "none";
    popup.innerHTML = `<div class='popup-content'>
        <img src="celebration.gif" alt="Celebration" />
        <p id="popup-compliment"></p>
        <button id="close-popup">Close</button>
    </div>`;
    document.body.appendChild(popup);

    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const randomCompliment = compliments[randomIndex];
        document.getElementById("popup-compliment").textContent = randomCompliment;
        popup.style.display = "flex";
    });

    document.getElementById("close-popup").addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Adding bouncing animation to the button
    button.classList.add("bouncing");
});
