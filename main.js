document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("#container");

  for (let i = 0; i < 16; i++) {
    for (let k = 0; k < 16; k++) {
      let square = document.createElement("div");
      square.className = "squares brisati";
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

  function newGridLoader(number) {
    const q = document.querySelectorAll(".brisati");
    q.forEach((x) => {
      x.style.display = "none";
    });

    for (let i = 0; i < number; i++) {
      for (let k = 0; k < number; k++) {
        let square = document.createElement("div");
        square.className = "brisati";
        let contHeight = container.clientHeight;
        let contWidth = container.clientWidth;
        let squareSide = Math.max((contHeight * 0.999) / number);

        // square.style.height = Math.min((contHeight * 0.999) / number);
        // square.style.width = Math.min((contWidth * 0.999) / number);
        square.style.width = squareSide + "px";
        square.style.height = squareSide + "px";
        square.style.border = "0.1px solid black";
        square.style.backgroundColor = "white";
        container.appendChild(square);
      }
    }
    const squares = document.querySelectorAll(".brisati");
    squares.forEach((x) => {
      x.addEventListener("mouseover", () => {
        x.style.background = "black";
        x.style.border = "0.1px solid white";
      });
      x.addEventListener("click", () => {
        x.style.background = "white";
        x.style.border = "0.1px solid black";
      });
    });
  }

  const gridBtn = document.querySelector("#createGridButton");
  gridBtn.addEventListener("click", () => {
    let input = document.getElementById("number").value;
    input = parseInt(input);

    newGridLoader(input);
  });
});
