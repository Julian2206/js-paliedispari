/* Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma. */

/* function palindrome(string) {


  // .split convert in arrays of letters
  // .reverse reverse the letters
  // .join to converte it back to a string

  const reversed = string.split("").reverse().join("");
  if (reversed === string) {
    return true;
  }
  return false;
} */

//-----------------------------------------------

/* function palindrome(string) {
  return string.split("").reverse().join();
}
console.log(string); */

//------------------------------------------------

/* palindrome */

const userInput = prompt("Enter");
console.log(palindrome(userInput));

function palindrome(string) {
  const len = string.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[len - 1 - i]) {
      console.log("not palindrome");
      return false;
    }
  }
  console.log("is palindrome");
  return true;
}

//-------------------------------------------------
