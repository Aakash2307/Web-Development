const typingtext = document.querySelector(".type-text p");

const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistake = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector(".button");

let timer;
let maxtime = 60;
let timeleft = maxtime;
let charIndex = 0;
let mistakesCount = 0;
let isTyping = false;

function loadParagraph() {
    const paragraph = [
        "The quick brown fox jumps over the lazy dog.",
        "A lazy cat sleeps soundly in the sun.",
        "She sells seashells by the seashore.",
        "My dog enjoys playing fetch in the park.",
        "He quickly packed a bag for the trip."
    ];

    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingtext.innerHTML = "";

    for (const char of paragraph[randomIndex]) {
        const span = document.createElement("span");
        span.innerText = char;
        typingtext.appendChild(span);
    }

    typingtext.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => input.focus());
    document.addEventListener("click", () => input.focus());
}

function initTyping() {
    const characters = typingtext.querySelectorAll("span");
    const typedChar = input.value.charAt(charIndex);

    if (charIndex < characters.length && timeleft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar === characters[charIndex].innerText) {
            characters[charIndex].classList.add("correct");
        } else {
            characters[charIndex].classList.add("incorrect");
            mistakesCount++;
        }

        characters[charIndex].classList.remove("active");
        charIndex++;
        if (charIndex < characters.length) {
            characters[charIndex].classList.add("active");
        }

        mistake.innerText = mistakesCount;
        let correctChars = charIndex - mistakesCount;
        cpm.innerText = correctChars;
        wpm.innerText = Math.round((correctChars / 5) / ((maxtime - timeleft) / 60));
    } else {
        clearInterval(timer);
        input.disabled = true;
    }
}

function initTimer() {
    if (timeleft > 0) {
        timeleft--;
        time.innerText = timeleft;
    } else {
        clearInterval(timer);
        input.disabled = true;
    }
}

function resetTest() {
    clearInterval(timer);
    loadParagraph();
    input.value = "";
    timeleft = maxtime;
    charIndex = 0;
    mistakesCount = 0;
    isTyping = false;
    time.innerText = timeleft;
    mistake.innerText = 0;
    wpm.innerText = 0;
    cpm.innerText = 0;
    input.disabled = false;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", resetTest);

loadParagraph();
