function removeTranstion(e) {
  console.log(e.propertyName);
  if (e.propertyName !== "transform") return;

  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log(key);
  key[0].classList.add("playing");
  audio.currentTime = 0; //rewind to the start
  audio.play();
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTranstion));
window.addEventListener("keydown", playSound);
