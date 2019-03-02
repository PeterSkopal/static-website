Number.prototype.pad = function(n) {
  if (n == undefined) n = 2;

  return (new Array(n).join("0") + this).slice(-n);
};

let now = new Date().getTime();
var specificDate = "Mar 12";
var year = new Date().getFullYear();
var annualDate = false;
let countDownDate = new Date(`${specificDate}, ${year} 00:00:00`);
if (annualDate) setupCountDownDate(year);
countDown(annualDate);
var interval = setInterval(countDown, 1000);

function setupCountDownDate(year) {
  while (countDownDate - now < 0) {
    year++;
    countDownDate = new Date(`${specificDate}, ${year} 00:00:00`);
  }
}

function countDown() {
  now = new Date();
  var distance = countDownDate.getTime() - now.getTime();

  if (countDownDate.getDate() === now.getDate()) {
    document.getElementById("countDown").innerHTML =
      "&#x1F389 It's Today! &#x1F389";
  } else if (!annualDate && distance < 0) {
    clearInterval(interval);
    document.getElementById("countDown").innerHTML =
      "Already passed... &#x1F614";
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).pad();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).pad();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).pad();

    document.getElementById(
      "countDown"
    ).innerHTML = `${days} days \& ${hours}:${minutes}:${seconds}`;
  }
}

function popShape() {
  var element = document.getElementById("ballon");
  element.parentNode.removeChild(element);
}
