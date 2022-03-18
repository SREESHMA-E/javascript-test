const maxlimit = 10000;
const counter = document.getElementById("counter");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");


function onIncrement(){
  const existingValue =parseInt(counter.innerHTML);
  counter.innerHTML = existingValue + 1;
}

function onDecrement(){
  const existingValue =parseInt(counter.innerHTML);
  counter.innerHTML = existingValue - 1;
}

incBtn.addEventListener('click', onIncrement);
decBtn.addEventListener('click', onDecrement);