let menu = document.querySelector("#menu-icon")
let ulTop= document.querySelector(".ul-top")
function popUp() {
    ulTop.style.display = "block";
}
menu.addEventListener("click", popUp);
