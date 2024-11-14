"use strict";

//Références vers les éléments du DOM
const btnMouseDown = document.getElementById("show_md");
const btnClick = document.getElementById("show_click");
const btnFibonacci = document.getElementById("fibonacci");
const h2 = document.getElementById("h2");
const pSeries = document.getElementById("series");

  const changeH2Text = () => {
  h2.innerText = h2.innerText === "" ? profile.getName() : "";
};

btnClick.addEventListener("click", changeH2Text);

btnMouseDown.addEventListener("mousedown", changeH2Text);

// btnFibonacci.addEventListener('mousedown', (e) => {
//     let numbers = pSeries.innerText.split(', ');
//     numbers.push((fibonacci(numbers.length)).toString());
//     pSeries.innerText = numbers.join(', ');
// });

var id;

btnFibonacci.addEventListener("mousedown", (e) => {
  if (id === undefined) {
    e.target.innerText = "Pause";

    id = setInterval(() => {
      const numbers = pSeries.innerText.split(", ");
      numbers.push(fibonacci(numbers.length).toString());
      pSeries.innerText = numbers.join(", ");
    }, 1 * 1000);
  } else {
    e.target.innerText = "Start Fibonacci";
    clearInterval(id);
    id = undefined;
  }
});

const profile = {
  name: "Leonardo Fibonacci",
  getName: function () {
    return this.name;
  },
};

const fibonacci = (n) => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
