let Großbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz";
let Zahlen = "0123456789";
let Sonderzeichen = "!@#€$§%&/()=?";

const slider = document.getElementById("myRange");
const sliderValue = document.getElementById("sliderValue");
const passwordField = document.getElementById("password");
const passwordHistory = document.getElementById("passwordHistory");

sliderValue.textContent = slider.value;

slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
});

function generatePassword() {
  let passwortlaenge = parseInt(slider.value);

  let Großbox = document.getElementById("Großbox").checked;
  let Kleinbox = document.getElementById("Kleinbox").checked;
  let Zahlenbox = document.getElementById("Zahlenbox").checked;
  let Sonderbox = document.getElementById("Sonderbox").checked;

  let Zeichen = "";

  if (Großbox) Zeichen += Großbuchstaben;
  if (Kleinbox) Zeichen += Kleinbuchstaben;
  if (Zahlenbox) Zeichen += Zahlen;
  if (Sonderbox) Zeichen += Sonderzeichen;

  if (Zeichen === "") {
    alert("Bitte wähle mindestens eine Option aus.");
    return;
  }

  let password = "";

  for (let i = 0; i < passwortlaenge; i++) {
    let random = Math.floor(Math.random() * Zeichen.length);
    password += Zeichen[random];
  }

  passwordField.value = password;

  let listItem = document.createElement("li");
  let passwordText = document.createElement("span");
  let deleteButton = document.createElement("button");

  passwordText.textContent = password;
  deleteButton.textContent = "Löschen";

  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(passwordText);
  listItem.appendChild(deleteButton);
  passwordHistory.prepend(listItem);
}

function copyPassword() {
  let password = passwordField.value;
  navigator.clipboard.writeText(password);
  alert("Passwort wurde kopiert: " + password);
}
