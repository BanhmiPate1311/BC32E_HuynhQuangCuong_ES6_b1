const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let colorContainer = document.querySelector("#colorContainer");
let pickColor = document.getElementsByClassName("color-button"),
  house = document.getElementById("house");

let loadColor = () => {
  let html = "";
  for (i = 0; i < colorList.length; i++) {
    if (i === 0) {
      html +=
        "<button class='color-button " + colorList[i] + " active'></button>";
    } else {
      html += "<button class='color-button " + colorList[i] + "'></button>";
    }
  }
  colorContainer.innerHTML = html;
};

loadColor();

for (let i = 0; i < pickColor.length; i++) {
  pickColor[i].addEventListener("click", function () {
    changeColor(colorList[i], i);
  });
}

changeColor = (color, index) => {
  // console.log(color);
  for (let i = 0; i < pickColor.length; i++) {
    pickColor[i].classList.remove("active");

    pickColor[index].classList.add("active");
  }
  house.className = "house " + color;
};
