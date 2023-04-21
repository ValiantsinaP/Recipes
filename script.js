const inputForm = document.querySelector(".inputform");
const position = document.querySelectorAll(".position");

inputForm.addEventListener("keyup", function (event) {
    const word = event.target.value.toLowerCase();
    position.forEach((item) => {
        item
            .querySelector(".ingredients")
            .textContent.toLowerCase()
            .includes(word)
            ? (item.style.display = "block")
            : (item.style.display = "none");
    });
});

// Это более продвинутый способ

// const buttons = document.querySelectorAll(".newbutton");

// buttons.forEach((item) => {
//     item.addEventListener("click", clicked);
// });

// function clicked() {
//     this.nextElementSibling.classList.toggle("visible");
// }

// это второй способ, но нужно для каждой кнопки прописать по аналогии

const buttonOne = document.querySelector(".button-one");
const instruction = document.querySelector(".instruction");


buttonOne.addEventListener('click', () => {
    instruction.classList.toggle('visible');
})
const buttontwo = document.querySelector('.button-two');
const instrtuctionTwo = document.querySelector('.instruction-two');

buttontwo.addEventListener("click", () => {
    instrtuctionTwo.classList.toggle('visible');
    })
const buttonThree = document.querySelector('.button-three');
const instructionThree = document.querySelector('.instruction-three');

buttonThree.addEventListener('click', () => {
    instructionThree.classList.toggle('visible');
})

const buttonFour = document.querySelector('.button-four');
const instructionFour = document.querySelector('.instruction-four');

buttonFour.addEventListener('click', () => {
instructionFour.classList.toggle('visible');
})

const buttonFive = document.querySelector('.button-five');
const instructionFive = document.querySelector(".instruction-five");

buttonFive.addEventListener('click', () => {
    instructionFive.classList.toggle('visible');
})

const buttonSix = document.querySelector('.button-six');
const instructionSix = document.querySelector('.instruction-six');

buttonSix.addEventListener('click', () => {
    instructionSix.classList.toggle('visible');
})