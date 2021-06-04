let menu = document.querySelector("#menu-icon");
let ulTop = document.querySelector(".ul-top");

let show = false;
function popUp() {
    console.log(true)
  if (show) {
    ulTop.style.display = "none";
    show= false
  } else {
    ulTop.style.display = "block";
    show = true
  }
}
menu.addEventListener("click", popUp);
