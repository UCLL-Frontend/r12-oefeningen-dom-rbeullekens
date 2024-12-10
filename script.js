// Oefening 1 ----------------------------------------------------
const button = document.getElementById("changeTitle");
const title = document.getElementById("title");

button.addEventListener("click", () => {
  title.textContent = "JavaScript is geweldig!";
});

// Oefening 2 ----------------------------------------------------
const buttonTwee = document.getElementById("addText");
const p = document.getElementById("paragraph");

buttonTwee.addEventListener("click", () => {
  p.textContent += " Hier is extra tekst!";
});

// Oefening 3 ----------------------------------------------------
const buttonDrie = document.getElementById("changeColor");
const colorBox = document.getElementById("colorBox");

buttonDrie.addEventListener("click", () => {
  const rood = Math.round(Math.random() * 255);
  const groen = Math.round(Math.random() * 255);
  const blauw = Math.round(Math.random() * 255);
  colorBox.style.backgroundColor = `RGB(${rood},${groen},${blauw})`;
});

// Oefening 4 ----------------------------------------------------
const buttonVier = document.getElementById("hideText");
const pVier = document.getElementById("text");

buttonVier.addEventListener("click", () => {
  pVier.style.display = "none";
});

// Oefening 5 ----------------------------------------------------
const buttonVijf = document.getElementById("addItem");
const itemLijst = document.getElementById("itemList");

buttonVijf.addEventListener("click", () => {
  itemLijst.append(`Nieuw Item`);
});
