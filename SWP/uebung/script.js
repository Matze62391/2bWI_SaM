let ausgabe = document.getElementById("ausgabe");
let str = "Hallo World";
let res = str.length;
ausgabe.innerHTML += "Länge <br>" + str + "=" + res;
ausgabe.innerHTML += "Länge <br>" + str + "=" + str.charAt(0);

//zähler von einem wert
let suche = "l";
let zaehler = 0;
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) === suche) {
    zaehler++;
  }
}

ausgabe.innerHTML += "<br>Anzahl von " + suche + " in " + str + "=" + zaehler;
//suche nach stelle im str
ausgabe.innerHTML += "<br>Suche World im string " + str.indexOf("World");
//concat
str = str.concat("Noah Maurer");
ausgabe.innerHTML += "<br>concat " + str;
//ersetzen
ausgabe.innerHTML +=
  "<br>Ersetzen von World durch Welt " + str.replace("World", "Welt");
//split
let woerter = str.split(" ");
ausgabe.innerHTML += "<br>Woerteranzahl" + woerter.length;
for (let i = 0; i < woerter.length; i++) {
  ausgabe.innerHTML += "<br>" + woerter[i] + "lwort:" + woerter[i].length;
}
//Ausschneiden
ausgabe.innerHTML += "<br>Ausschneiden 1-3 Hallo..." + str.substring(1, 3);

let pes = document.getElementsByTagName("p");
ausgabe.innerHTML += "<br>? Anzahl p"+ pes.length;
for (let i=0; i<pes.length;i++){
    pes[i].innerHTML += i+1;
}