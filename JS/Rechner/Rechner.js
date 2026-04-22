let history = [];

function Rechner() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("ergebnis").textContent = "Bitte gib eine Zahl ein!";
    return;
  }

  let ergebnis;

  if (operator === "+") ergebnis = num1 + num2;
  else if (operator === "-") ergebnis = num1 - num2;
  else if (operator === "*") ergebnis = num1 * num2;
  else if (operator === "/") {
    if (num2 === 0) {
      document.getElementById("ergebnis").textContent = "Mit 0 kann nicht dividiert werden!";
      return;
    }
    ergebnis = num1 / num2;
  }

  document.getElementById("ergebnis").textContent = ergebnis;
  history.push(num1 + " " + operator + " " + num2 + " = " + ergebnis);

  Anzeigen();
}

function Anzeigen() {
//Text
  document.getElementById("textAusgabe").innerHTML = history
    .map(item => `<p>${item}</p>`)
    .join("");
//Tabelle
  document.getElementById("tabellenAusgabe").innerHTML =
    "<tr><th>Rechnung</th></tr>" +
    history.map(item => `<tr><td>${item}</td></tr>`).join("");
//Liste
  document.getElementById("listenAusgabe").innerHTML = history
    .map((item, index) => `<li>${item} <button onclick="Loeschen(${index})">Löschen</button></li>`)
    .join("");
}

function Loeschen(index) {
  history.splice(index, 1);
  Anzeigen();
}

function AnzeigeWechseln() {
  let auswahl = document.getElementById("auswahl").value;

  document.getElementById("textBereich").style.display = "none";
  document.getElementById("tabellenBereich").style.display = "none";
  document.getElementById("listenBereich").style.display = "none";

  if (auswahl === "text") {
    document.getElementById("textBereich").style.display = "block";
  } else if (auswahl === "tabelle") {
    document.getElementById("tabellenBereich").style.display = "block";
  } else if (auswahl === "liste") {
    document.getElementById("listenBereich").style.display = "block";
  }
}