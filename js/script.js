var risposta = prompt('Nome?');
var risposta2 = prompt('Cognome?');
var risposta3 = prompt('Colore preferito?');
var anno = new Date().getFullYear()
var outputContainer = document.getElementById('output');
outputContainer.innerText = risposta + risposta2 + risposta3 + anno;
