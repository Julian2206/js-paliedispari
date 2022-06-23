/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const userGuess = parseInt(prompt("enter a range between 0-5"));

if (userGuess % 2 === 0) {
  console.log("you have choosen even number:", userGuess);
} else {
  console.log("you have choosen odd number:", userGuess);
}

let aiGuess;

let nElements = 5;

const randomNumber = aiRandomNumber(nElements);
console.log(randomNumber);

function aiRandomNumber(nElements) {
  const aiGuess = Math.floor(Math.random() * nElements) + 1;
  return aiGuess;
}

function isEven() {
  if ((userGuess + aiGuess) % (2 === 0)) {
    console.log("usr Win");
  } else if ((userGuess + aiGuess) % (2 !== 0)) {
    console.log("ai Win");
  } else {
    console.log("insert a valid number");
  }
}
