// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Le variabili
var arrayNumPc = [];   // array dei numeri generati random dal Pc
var arrayNumUser = [];  // array dei numeri scelti dall'utente
var numPrompt = 84;  // numero tentativi consentiti
var numInList;       // numero già presente nell'array 'arrayNumPc' ( = partita persa)
var points = 0;      // punteggio raggiunto ( = numeri indovinati)
var message = 'Hai vinto';  // messaggio standard per l'eventuale vincita


// 1.Il computer genera 16 numeri casuali da 1 a 100 con l'aiuto della funzione(getRandomNumber).
while (arrayNumPc.length < 16) {
  var numRandom = getRandomNumber (1, 100);
  var find = isInArray (arrayNumPc, numRandom);   //restituisce true o false
  console.log(arrayNumPc);
  if (find == false) {
    // inserisco il numero con il .push solo se non è già presente nella array: arrayNumPc
    arrayNumPc.push(numUser);
    console.log(numUser);
  }
}
console.log(arrayNumPc);

// 2. Chiedo all’utente di inserire per 84 volte un numero da 1 a 100
// 3. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

var numInList = false;
// Se la lunghezza dell'array dei numeri scelti dall'utente non supera il numero dei tentativi consentiti ( 84 ) e il numero scelto dall'utente non è presente nell'array dei numeri generati random dal Pc : allora chiedi all'utente di inserire un'altro numero. Nel caso contrario la partita termina e viene generato il risultato.
while (arrayNumUser.length < numPrompt && numInList = false) {
  var numUser = parseInt(prompt('Inserisci un numero da 1 a 100'));

}




// if(numUser !== arrayNumPc[i]) {
//   console.log(arrayNumUser);
//   arrayNumUser.push(numUser);
// }else if (numUser == arrayNumPc[i] ) {
//   alert('numero presente');
// }



// FUNZIONI___________________________
// Funzione che genera i numeri random
function getRandomNumber (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}

// Funzione che cerca in un array
function isInArray (array, element){
  var i = 0;
  var result = false;
  while (i < array.length && result == false ) {
    if (array[i] == element) {
        return true;
      }
    i++;
  }
  return result;
}
