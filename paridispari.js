/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const userGuess = parseInt(prompt("enter a range between 0-5"));
if (userGuess % userGuess === 0) {
  console.log("you choose even:", userGuess);
} else {
  console.log("you choose odd:", userGuess);
}

function aiRandomNumber() {
  const aiGuess = Math.floor(Math.random() * 5) + 1;
  console.log(aiGuess);
  return aiGuess;
}

//console.log(aiRandomNumber);

function isEven() {
  for (let i = 0; i < 1; i++) {
    if ((userGuess + aiGuess) % 2 === 0) {
      console.log("usr Win");
    } else if (userGuess + (aiGuess % 2) !== 0) {
      console.log("ai Win");
    } else {
      console.log("insert a valid number");
    }
  }
}
