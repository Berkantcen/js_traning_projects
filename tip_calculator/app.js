const tips = document.querySelector(".tips");
const tip = document.querySelectorAll(".tip");
const calculate = document.querySelector(".calculate");
const display = document.querySelector(".display");
const reset = document.querySelector(".reset");
let percentange;

// TIP DECIDER
tips.addEventListener("click", function (e) {
  removeActiveClasses();
  if (e.target.classList.contains("tip")) {
    e.target.classList.add("active");
    percentange = e.target.innerHTML;
  }

  if (percentange === "turkey") {
    percentange = 0;
  } else if (percentange === "usa") {
    percentange = 12;
  } else if (percentange === "england") {
    percentange = 18;
  } else if (percentange === "uganda") {
    percentange = 21;
  } else {
    percentange = parseInt(percentange);
  }
});

// CALCULATE EVENT
calculate.addEventListener("click", function () {
  const inputValue = document.querySelector(".input").value;
  const result = (inputValue * percentange) / 100;
  if (percentange === 0) {
    display.textContent = "Just say Eyvallah Gülüm ";
    document.querySelector(".adv").style.display = "block";
  } else {
    display.textContent = "You ideally should pay " + result + "$ tip";
    document.querySelector(".adv").style.display = "flex";
  }
});

// RESET

reset.addEventListener("click", function () {
  location.reload();
});

// ACTIVE CLASS REMOVER
function removeActiveClasses() {
  tip.forEach((singleTip) => {
    singleTip.classList.remove("active");
  });
}
