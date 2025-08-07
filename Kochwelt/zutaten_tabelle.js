function hintergrundfarbe(tabelle) {
  let zeilen = tabelle.getElementsByTagName("tr");

  for (let index = 0; index < zeilen.length; index++) {
    if (index % 2 !== 1) {
      zeilen[index].classList.add("table-bg");
    }
  }
}

function limitInput(input) {
  if (input.value > 20) {
    input.value = 20;
  } else if (input.value < 1) {
    input.value = 1;
  }
}

let ingredientsForPierogi = [
  "g Weizenmehl",
  "Ei",
  "Prisen Salz für den Nudelteig",
  "g Kartoffeln, mehlig kochend",
  "Salz",
  "g Schichtkäse",
  "Zwiebel",
  "g Butter",
  "Pfeffer",
  "Zweige Petersilie",
  "g Schmand",
  "Mehl, für die Arbeitsfläche",
];
let amountForPierogi = [250, 1, 0.5, 200, null, 150, 1, 50, null, 4, 50, null];

function IngredientPierogi(event) {
  event.preventDefault();

  let tabelle = document.getElementById("number-of-ingredient-for-pierogi");
  let input = document.getElementById("amountInput");
  let multiplier = input.value;

  tabelle.innerHTML = "";

  for (let index = 0; index < ingredientsForPierogi.length; index++) {
    if (amountForPierogi[index] == null) {
      tabelle.innerHTML += `<tr><td>${ingredientsForPierogi[index]}</td></tr>`;
      continue;
    }
    if (ingredientsForPierogi[index].startsWith("g")) {
      let newAmount = (amountForPierogi[index] * multiplier) / 4;
      tabelle.innerHTML += `<tr><td>${
        newAmount + ingredientsForPierogi[index]
      }</td></tr>`;
    } else {
      let newAmount = (amountForPierogi[index] * multiplier) / 4;
      tabelle.innerHTML += `<tr><td>${
        newAmount + " " + ingredientsForPierogi[index]
      }</td></tr>`;
    }
  }
  hintergrundfarbe(tabelle);
}

let ingredientsForSpaghetti = [
  " g Spaghetti",
  "Scheibe/n Speck",
  "Ei",
  "Eigelb",
  " g Parmesan, gerieben",
  "n.B. Salz und Pfeffer",
];
let amountForSpaghetti = [125, 1, 1, 0.5, 15, null];

function IngredientSpaghetti(event) {
  event.preventDefault();

  let tabelle = document.getElementById("ingredients-table");
  let input = document.getElementById("amountInput").value;

  if (input === NaN || input > 15 || input <= 0) return;

  tabelle.innerHTML = "";

  for (let index = 0; index < ingredientsForSpaghetti.length; index++) {
    if (amountForSpaghetti[index] == null) {
      tabelle.innerHTML += `<tr><td>${ingredientsForSpaghetti[index]}</td></tr>`;
      continue;
    }
    if (ingredientsForSpaghetti[index].startsWith("g")) {
      let newAmount = amountForSpaghetti[index] * input;
      tabelle.innerHTML += `<tr><td>${
        newAmount + ingredientsForSpaghetti[index]
      }</td></tr>`;
    } else {
      let newAmount = amountForSpaghetti[index] * input;
      tabelle.innerHTML += `<tr><td>${
        newAmount + " " + ingredientsForSpaghetti[index]
      }</td></tr>`;
    }
  }
  hintergrundfarbe(tabelle);
}

let ingredientsForSalad = [
  "Salatgurke(n)",
  "Paprikaschot(n), rot und grün",
  "g Tomate(n)",
  "Zwiebel(n)",
  "g Schafskäse(n)",
  "Glas Oliven, schwarze, ca 100g",
  "Salz und Pfeffer",
  "Zitrone(n)",
  "ml Olivenöl",
  "Oregano",
];
let amountForSalad = [1, 2, 500, 2, 200, 1, null, 1, 125, null];

function IngredientSalad(event) {
  event.preventDefault();

  let tabelle = document.getElementById("number-of-ingredient-for-salad");
  let input = document.getElementById("amountInput");
  let multiplier = input.value;

  tabelle.innerHTML = "";

  for (let index = 0; index < ingredientsForSalad.length; index++) {
    if (amountForSalad[index] == null) {
      tabelle.innerHTML += `<tr><td>${ingredientsForSalad[index]}</td></tr>`;
      continue;
    }
    if (
      ingredientsForSalad[index].startsWith("g") ||
      ingredientsForSalad[index].startsWith("ml")
    ) {
      let newAmount = (amountForSalad[index] * multiplier) / 4;
      tabelle.innerHTML += `<tr><td>${
        newAmount + ingredientsForSalad[index]
      }</td></tr>`;
    } else {
      let newAmount = (amountForSalad[index] * multiplier) / 4;
      tabelle.innerHTML += `<tr><td>${
        newAmount + " " + ingredientsForSalad[index]
      }</td></tr>`;
    }
  }
  hintergrundfarbe(tabelle);
}

let ingredientsForGulasch = [
  "g Rindergulsch",
  "g Zwiebeln",
  "ml Rinderfond",
  "g Karotten",
  "Stück Paprikaschote(n)",
  "Stück Knoblauchzehe",
  "g Butterschmalz",
  "Teelöffel Tomatenmark",
  "Teelöffel Paprikapulver edelsüß",
  "Petersilie frisch und glatt",
  "Spritzer Zitrone",
  "Majoran, Kümmel ganz, Loorbeerblätter, Salz und Pfeffer nach Bedarf",
];
let amountForGulasch = [
  125,
  75,
  300,
  38,
  0.5,
  0.25,
  12.5,
  1,
  1,
  null,
  null,
  null,
];

function IngredientGulasch(event) {
  event.preventDefault();

  let tabelle = document.getElementById("number-of-ingredient-for-gulasch");
  let input = document.getElementById("amountInput");
  let multiplier = input.value;

  tabelle.innerHTML = "";

  for (let index = 0; index < ingredientsForGulasch.length; index++) {
    if (amountForGulasch[index] == null) {
      tabelle.innerHTML += `<tr><td>${ingredientsForGulasch[index]}</td></tr>`;
      continue;
    }
    if (
      ingredientsForGulasch[index].startsWith("g") ||
      ingredientsForGulasch[index].startsWith("ml")
    ) {
      let newAmount = amountForGulasch[index] * multiplier;
      tabelle.innerHTML += `<tr><td>${
        newAmount + ingredientsForGulasch[index]
      }</td></tr>`;
    } else {
      let newAmount = amountForGulasch[index] * multiplier;
      tabelle.innerHTML += `<tr><td>${
        newAmount + " " + ingredientsForGulasch[index]
      }</td></tr>`;
    }
  }
  hintergrundfarbe(tabelle);
}

function toggleMenu() {
  document.getElementById("menu-box").classList.toggle("mobile-menu-closed");
}
