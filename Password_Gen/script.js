let Großbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Kleinbuchstaben = "abcdefghijklmnopqrstuvwxyz";
let Zahlen = "0123456789";
let Sonderzeichen = "!@#€$§%&/()=?";

function generatePassword() {
  let passwordLength = document.getElementById("length").value;

}


function copyPassword(){
  let password = document.getElementById("password").value;
  navigator.clipboard.writeText(password);
  alert("Passwort wurde kopiert: " + password);
}