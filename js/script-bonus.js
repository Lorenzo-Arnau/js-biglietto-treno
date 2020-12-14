// Inizializzo js
alert('Buongiorno,risponda alle domande seguenti per ottenere un preventivo del biglietto');
var sconto;
// Inizializzo js

// domande  prompt
var name = prompt('Scriva per favore nome e cognome');
var kilometers = prompt('Quanti km intende percorrere oggi?');
var age = prompt('Quanti anni ha?');
var superSconto = prompt('Provi a indovinare il nostro numero fortunato per viaggiare gratis! Inserisca un numero da 1 a 10!');
// domande  prompt

// creo il lucky number
var luckyNumber = Math.floor(Math.random() * 10) + 1;
console.log(luckyNumber + 'lucky number');
console.log(superSconto + 'user number');
// creo il lucky number

// controllo che vengano inseriti numeric alle domande
if (isNaN(kilometers) || isNaN(age) ) {
alert('Inserisca solo numeri, grazie');
}else{
var price =parseInt(kilometers) * 0.21;
console.log(price + '£');
}
// controllo che vengano inseriti numeric alle domande

// controllo età del passeggero e calcolo sconto

if (age <= 18) {
 sconto = (price * 20) / 100;
}else if (age >= 65) {
 sconto = (price * 40) / 100;
}else{
  sconto = 0;
}
// controllo età del passeggero e calcolo sconto
var prezzoFinale = price - sconto;
document.getElementsByTagName('h2')[0].innerText = (name);
// controllo se l'utente ha vinto e cambio grafica e testo del ticket
if (parseInt(superSconto) === luckyNumber) {
  document.getElementById('ticket').style.background = "url(./img/gold.png) no-repeat center";
  document.getElementsByTagName('h1')[0].innerText = ('Che fortuna! Hai vinto!')
  document.getElementsByClassName('prezzo')[0].innerText = ('Hai indovinato il numero spendi 0 euro!');
  prezzoFinale = 0;
  document.getElementById('finalKm').innerText = (kilometers);
  document.getElementById('finalAge').innerText = (age);
}else{
  document.getElementById('finalKm').innerText = (kilometers);
  document.getElementById('finalAge').innerText = (age);
  document.getElementById('finalPrice').innerText = (prezzoFinale.toFixed(2));
  document.getElementById('finalSconto').innerText = (sconto);
}
// controllo se l'utente ha vinto e cambio grafica e testo del ticket
