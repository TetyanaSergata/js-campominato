// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// 1.Il computer genera 16 numeri casuali da 1 a 100.
var arrayNumUser = [];

for (var i = 0; i < 4; i++) {
  var numUser = parseInt(prompt('Inserisci un numero da 1 a 100'));
  console.log(numUser);
}


var arrayNumPc = [];

for (var i = 0; i < 16; i++) {
  var numRandom = getRandomNumber (1, 100);
  arrayNumPc.push(numRandom);
  console.log(arrayNumPc);

}
// Funzione
function getRandomNumber (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
