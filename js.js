/* Это объявление переменной, мы наши кнопку по тегу */
const audio = new Audio("./давай.mp4");
const buttons = document.querySelectorAll(".kauvec_adelon");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});