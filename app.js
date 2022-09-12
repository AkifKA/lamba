// document.querySelector(".renk").addEventListener("click", () => {
//   const renkler = [
//     "red",
//     "blue",
//     "green",
//     "yellow",
//     "black",
//     "pink",
//     "purple",
//     "brown",
//   ];
//   const rasgeleSayı = Math.floor(Math.random() * renkler.length);
//   document.querySelector("body").style.backgroundColor = renkler[rasgeleSayı];
//   document.querySelector(".renk-yazi").innerHTML = renkler[rasgeleSayı];
// });

document.querySelector(".btn-on").addEventListener("click", () => {
  document.querySelector(".img").src = "./img/pic_bulbon.gif";
});
document.querySelector(".btn-off").addEventListener("click", () => {
  document.querySelector(".img").src = "./img/pic_bulboff.gif";
});
