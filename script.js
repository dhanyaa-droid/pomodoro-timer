let startingTime = 25 * 60;
let time = startingTime;

let timer = document.getElementById("timer");

let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let rocket = document.getElementById("rocket");

let countdown;

function updateTimer() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.innerText =
        `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}

startBtn.onclick = () => {

    clearInterval(countdown);

    countdown = setInterval(() => {

        time--;

        updateTimer();

        rocket.style.transform =
            `translateY(-${(startingTime - time) / 5}px)`;

        if (time <= 0) {

            clearInterval(countdown);

            timer.innerText = "🚀 Mission Complete";

        }

    }, 1000);

};

pauseBtn.onclick = () => {

    clearInterval(countdown);

};

resetBtn.onclick = () => {

    clearInterval(countdown);

    time = startingTime;

    updateTimer();

    rocket.style.transform = "translateY(0px)";

};

updateTimer();
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 200; i++) {

    let star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
        Math.random() * 3 + 1 + "s";

    starsContainer.appendChild(star);
}