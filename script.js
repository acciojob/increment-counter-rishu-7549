//your JS code here. If required.
let count = document.getElementById("counter");
let incre = document.getElementById("incrementBtn");

incre.addEventListener("click", function () {
  let currentValue = parseInt(count.innerHTML);
  alert(currentValue);
  count.innerHTML = currentValue + 1;
});

