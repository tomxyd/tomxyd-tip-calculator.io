let billAmount = document.getElementById("bill");
let custom = document.getElementById("custom");
let people = document.getElementById("people");
let tipAmount = document.getElementById("tip");
let total = document.getElementById("total");
let message = document.getElementById("message");
let tipScore;
let score;

function storeValue(tip) {
  tipScore = Number(tip.value);
  calculateTipAmount();
}

function mUp(obj) {
  obj.style.backgroundColor = "$Light-grayish-cyan";
}

function calculateTipAmount() {
  var bill = billAmount.value;
  if (bill > 0 && tipScore > 0) {
    score = bill * (tipScore * 0.01);
    score = score.toFixed(2);
    tipAmount.innerHTML = "$" + score;
  }
  checkIndividual();
}

function calculateTotalAmount() {
  var individual = people.value;
  if (score > 0 && individual > 0) {
    var totalAmount = score * individual;
    totalAmount = totalAmount.toFixed(2);
    total.innerHTML = "$" + totalAmount;
  }
  checkIndividual();
}
function checkIndividual() {
  var bill = billAmount.value;
  var individual = people.value;
  if (individual <= 0) {
    people.style.border = "3px solid red";
    message.style.display = "block";
  } else if (individual > 0) {
    people.style.border = "none";
    message.style.display = "none";
  }
}

function reset() {
  location.reload();
}
