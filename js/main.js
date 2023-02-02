
var elBtn = document.querySelector(".burger-menu__btn");
var elBtnImg = document.querySelector(".burger-menu__img");
var elHidHeader = document.querySelector(".hidden-header");

var icon = true;

elBtn.addEventListener("click", function() {

    // elHidHeader.classList.add("show-header");
    // elHidHeader.classList.remove("show-header");
    elHidHeader.classList.toggle("show-header");

    if(!icon){
        elBtnImg.src = "../images/burger-menu.svg";
        icon = true;
    } else {
        elBtnImg.src = "../images/close-menu.svg";
        icon = false;
    }
})