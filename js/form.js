var button = document.querySelector(".search-button");
var popup = document.querySelector(".to-find-form");
var form = document.querySelector("form");
var dateArrival = popup.querySelector("[name=date-arrival]");
var dateDeparture = popup.querySelector("[name=date-departure]");
var numberAdults = popup.querySelector("[name=number-adults]");
var numberChildren = popup.querySelector("[name=number-children]");

var isStorageSupport = true;
var storage = "";

try {
  storageAdults = localStorage.getItem("numberAdults");
  storageChildren = localStorage.getItem("numberChildren");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("find-form-condition");

button.addEventListener("click", function(evt) {
  popup.classList.toggle("find-form-condition");
  if (storage) {
    numberAdults = storageAdults;
    numberChildren = storageChildren;
  }
});

form.addEventListener("submit", function(evt) {
  if (!dateArrival.value || !dateDeparture.value || !numberAdults.value || !numberChildren.value) {
    evt.preventDefault();
    console.log("Форма не должна отправляться с пустыми полями");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("numberAdults", numberAdults.value);
      localStorage.setItem("numberChildren", numberChildren.value);    
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.toggle("find-form-condition");
  }
});

