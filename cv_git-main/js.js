/* Это объявление переменной, мы наши кнопку по тегу */
const audio = new Audio("./sound.mp3");
const buttons = document.querySelectorAll(".kauvec_adelon");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});