let werte = [];

function hinzufügen() {
  let wert = document.getElementById("eingabe").value;
  werte.push(wert);
  listeAktualisieren();
  document.getElementById("eingabe").value = "";
}

function listeAktualisieren() {
  document.getElementById("liste").innerHTML = "";
  for (let i = 0; i < werte.length; i++) {
    console.log(werte[i]);
    document.getElementById("liste").innerHTML +=
      "<li class='list-item'>" +
      werte[i] +
      "<button class='delete-btn' onclick='einzelLöschen(" +
      i +
      ")'>Löschen</button></li>";
  }
}

function Löschen(index) {
  werte.splice(index, 1);
  listeAktualisieren();
}
