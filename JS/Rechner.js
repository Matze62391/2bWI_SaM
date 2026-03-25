function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error404";
  }
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
function output(wert, name) {
  const output = document.getElementById(name);
  output.innerHTML += name + ": " + wert + "<br>";
}
