//Write a function findMax that takes three arguments and returns their maximum.
function findMax(x, y, z) {
  return Math.max(x, y, z);
}
console.log(findMax(22, 34, 57));

//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

function evenAndOdds(params) {
  let number = prompt("Enter a positive number. ");
  if (number % 2 == 0) {
    console.log("It's an even number");
  } else {
    console.log("It's an odd number");
  }
}
evenAndOdds(prompt);

//Write a function which generates a randomUserIp. Ex: 168.127.25.2
// IP adresi, noktalarla ayrılan 4 adet 8 bitlik sayı ile ifade edilir. Öktet (Sekizli) adı verilen bu sayılar maksimum 3 rakamlıdır ve 254’ten büyük değildir.
function generateIp(params) {
  rondomUserIp1 = Math.floor(Math.random() * 255);
  rondomUserIp2 = Math.floor(Math.random() * 255);
  rondomUserIp3 = Math.floor(Math.random() * 255);
  rondomUserIp4 = Math.floor(Math.random() * 255);
  console.log(
    rondomUserIp1 +
      "." +
      rondomUserIp2 +
      "." +
      rondomUserIp3 +
      "." +
      rondomUserIp4
  );
}
generateIp();

//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.
let firstName = prompt("Enter your name");
let lastName = prompt("Enter your surname");

function fullName(x, y) {
  console.log(
    firstName,
    lastName,
    firstName.length + lastName.length,
    "character"
  );
}
fullName(firstName, lastName);

let lastLetter = firstName.substring(firstName.length - 1);
let beforeLast = firstName.substring(
  firstName.length - 2,
  firstName.length - 1
);
if (
  (lastLetter == "f" ||
    lastLetter == "s" ||
    lastLetter == "t" ||
    lastLetter == "k" ||
    lastLetter == "ç" ||
    lastLetter == "ş" ||
    lastLetter == "h" ||
    lastLetter == "p") &&
  (beforeLast == "a" ||
    beforeLast == "o" ||
    beforeLast == "ı" ||
    beforeLast == "u")
) {
  console.log(`${firstName}'tan Sevgilerle.`);
} else if (
  (lastLetter == "f" ||
    lastLetter == "s" ||
    lastLetter == "t" ||
    lastLetter == "k" ||
    lastLetter == "ç" ||
    lastLetter == "ş" ||
    lastLetter == "h" ||
    lastLetter == "p") &&
  (beforeLast == "e" ||
    beforeLast == "ö" ||
    beforeLast == "i" ||
    beforeLast == "ü")
) {
  console.log(`${firstName}'ten Sevgilerle.`);
} else {
  console.log(`${firstName}'den Sevgilerle.`);
}
