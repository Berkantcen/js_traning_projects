const container = document.querySelector(".container");
const color = [
  "#FFBE0B",
  "#FB5607",
  "#FF006E",
  "#8338EC",
  "#3A86FF",
  "#FF0000",
  "#0AEFFF",
  "#DEFF0A",
];
// DIV CREATION
createBox(255);

function createBox(count) {
  for (let i = 0; i < count; i++) {
    let boxEl = document.createElement("div");
    boxEl.classList.add("box");
    container.appendChild(boxEl);
  }
}

const boxes = document.querySelectorAll(".box");

//  EFFECT
boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    let randomId = Math.floor(Math.random() * color.length);

    box.style.backgroundColor = `${color[randomId]}`;
  });
  box.addEventListener("mouseout", function () {
    setTimeout(function () {
      box.style.backgroundColor = "#444";
    }, 2000);
  });
});
