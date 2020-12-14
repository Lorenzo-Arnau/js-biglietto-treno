alert('Buongiorno,risponda alle domande seguenti per ottenere un preventivo del biglietto');
var kilometers = prompt('Quanti km intende percorrere oggi?');
var age = prompt('Quanti anni ha?')
var sconto;
if (isNaN(kilometers) || isNaN(age) ) {
alert('Inserisca solo numeri, grazie');
}else{
var price =parseInt(kilometers) * 0.21;
console.log(price + '£');
}

if (age <= 18) {
 sconto = (price * 20) / 100;
}else if (age >= 65) {
 sconto = (price * 40) / 100;
}else{
  sconto = 0;
}
var prezzoFinale = price - sconto;
document.getElementById('ticket').innerText = ('Il suo biglietto è pronto..per percorrere ' + kilometers + ' km e calcolata la sua età di ' + age + ' anni il costo del biglietto è di ' + prezzoFinale + ' euro')
