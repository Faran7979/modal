const button = document.querySelector("button");
const modalParent = document.querySelector(".modal-parent");
const hideElem = document.querySelector(".X");
const sectionElem = document.querySelector("section");

function showModal() {
  modalParent.style.display = "block";
  sectionElem.style.filter = "blur(10px)";
  button.blur();
}

function hide1() {
  modalParent.style.display = "none";
  sectionElem.style.filter = "blur(0px)";
}

function hideModalWithEsc(event) {
  if (event.keyCode === 27) {
    modalParent.style.display = "none";
    sectionElem.style.filter = "blur(0px)";
  }
}

button.addEventListener("click", showModal);
hideElem.addEventListener("click", hide1);
document.body.addEventListener("keyup", hideModalWithEsc);
