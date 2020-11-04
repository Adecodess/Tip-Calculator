var bill = document.getElementById("billamt");
var service = document.querySelector("select");
var people = document.getElementById("peopleamt");
var button = document.getElementById("calculate");
var tip = document.getElementById("totalTip");
var tip2 = document.getElementById("tip2");

function afterClick() {
  if (bill.value != "" && service.value != 0 && people.value != "") {
    totalTip = "";
    tip.textContent = totalTip;

    totalTip = (bill.value * service.value) / people.value;

    totalTip = Math.round(totalTip * 100) / 100;
    totalTip = totalTip.toFixed(2);
    tip2.textContent = "Tip amount";
    tip.textContent = "N " + totalTip;
  }
}

button.addEventListener("click", afterClick);
bill.addEventListener("keypress", function (e) {
  if (e.keyCode < 46 || e.keyCode > 58) {
    e.preventDefault();
  }
});
people.addEventListener("keypress", function (e) {
  if (event.keyCode === 13) {
    afterClick();
  } else if (e.keyCode < 46 || e.keyCode > 58) {
    e.preventDefault();
  }
});
