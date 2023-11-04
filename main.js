document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#container");

  for (let i = 0; i < 16; i++) {
    for (let k = 0; k < 16; k++) {
      let square = document.createElement("div");
      square.className = "squares";
      container.appendChild(square);
    }
  }

  const squares = document.querySelectorAll(".squares");

  squares.forEach((x) => {
    x.addEventListener("mouseover", () => {
      x.style.background = "black";
    });
    x.addEventListener("click", () => {
      x.style.background = "white";
    });
  });
});
