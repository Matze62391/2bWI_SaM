let history = [];

function Rechner() {
  let value1 = document.getElementById("num1").value;
  let value2 = document.getElementById("num2").value;

  let operator = document.getElementById("operator").value;

  let num1 = parseFloat(value1);
  let num2 = parseFloat(value2);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("ergebnis").textContent =
      "Bitte gib eine Zahl ein!";
    return;
  }

  let ergebnis;

  if (operator === "+") {
    ergebnis = num1 + num2;
  } else if (operator === "-") {
    ergebnis = num1 - num2;
  } else if (operator === "*") {
    ergebnis = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      document.getElementById("ergebnis").textContent = "Mit 0 kann nicht dividiert werden";
      return;
    }
    ergebnis = num1 / num2;
  }

  document.getElementById("ergebnis").textContent = ergebnis;

  let old = num1 + " " + operator + " " + num2 + " = " + ergebnis;

  history.push(old);

  Rechnungen();
}

function Rechnungen() {
  let liste = document.getElementById("liste");

  liste.innerHTML = "";

  history.forEach(function (item, index) {
    let row = document.createElement("div");

    let text = document.createElement("span");
    text.textContent = item + " ";

    let loeschen = document.createElement("button");
    loeschen.textContent = "Löschen";

    loeschen.onclick = function () {
      deleteListe(index);
    };

    row.appendChild(text);
    row.appendChild(loeschen);

    liste.appendChild(row);
  });
}

function deleteListe(index) {
  history.splice(index, 1);
  Rechnungen();
}
