/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trovaIlPiuGrande(num1, num2){
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(trovaIlPiuGrande(10, 5))
console.log(trovaIlPiuGrande(20, 25))

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function notEqual(num) {

  if(num !== 5) {
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibleByFive(num) {

  if(num%5 === 0) {
    console.log("divisible by 5" + " " + num);
  } else {
    console.log("not divisible by 5");
  }
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function CompareValue(num1, num2) {

  if (num1 === 8 || num2 === 8 || num1+num2 === 8 || num1-num2 === 8) {
    console.log("correct");
  } else {
    console.log("not correct");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function eCommerce(value) {

  let totalShoppingCart = 0;

  if (totalShoppingCart > 50) {
    console.log("La tua spesa è di " + totalShoppingCart);
  } else {
    let value = 25;
    console.log("La tua spesa è di " + totalShoppingCart+value + ", l'ammontare delle spese di spezione è di " + value);
  }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function eCommerce(num1, num2, num3) {

  let totalShoppingCart = (num1 * 0.2) + (num2 * 0.2) + (num3 * 0.2);

  if (totalShoppingCart > 50) {
    console.log("La spesa è di " + totalShoppingCart);
  } else {
    let value = 25;
    console.log("La spesa è di " + totalShoppingCart+value + ", le spese di spezione sono " + value);
  }

}
console.log(eCommerce(45, 56, 65));

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

function ordinaNumeri(num1,num2,num3) {
  let numeriOrdinati = [num1,num2,num3]; 
  numeriOrdinati.sort (function (a,b) {
    return b - a; 
  });
  console.log (numeriOrdinati);
}
  ordinaNumeri (10,5,8)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function controllaSeIntero(num){
  //struttura di controllo if else con composizione composta
  //per verificare se num è intero
  if (typeof num === "number" && Number.isInteger (num)) { 
    return true;
  } else {
    return false;
  }
}
console.log(controllaSeIntero(5));

//oppure

function controllaSe(){
  let num;
  if (typeof num === 'number') {
    console.log("corretto");
  } else {
    console.log("incorretto");
}
}
console.log(controllaSe(5));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let variabile = 3
if (variabile % 2 === 0) {
  console.log(variabile + " è pari")
} else {
  console.log (variabile+ " è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val<5) {
  console.log("meno di 5");
} else if (val<10) {
  console.log("meno di 10");
} else {
  console.log("uguale a 10 o maggiore");
}

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let numero = 17;
//struttura a blocchi annidati per eseguire controlli su una variabile
if(num < 5) {
  console.log("tiny");
} else {
  if (num < 10) {
    console.log("small");
  } else {
    if (num < 15) {
      console.log("medium");
    } else {
      if (num<20) {
        console.log("large");
      } else {
          console.log("huge");
        }
      }
    }
  }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

//è utile per non usare if else
let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);

//equivale a 

if(isMale) {
  gender = "male"
} else {
  gender = "female"
}
console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

let num = 0;
while (num<=5) {
  console.log(num);
  num++
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for (let i=0; i<=10; i++) {
  console.log(i)
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

for (let i=0; i<=10; i ++) {
  if (i===8 || i===10){
    continue;
  } 
  console.log(i)
}

//oppure

for (let i=0; i<=10; i ++) {
  if (i!==3 && i!==8) {
    console.log(i);
  }
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (var i=0; i<=15; i++) {
  if (i % 2 === 0) {
    console.log(i + "è pari")
  } else {
    console.log (i+ "è dispari")
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i=1; i<=100; i++) {
  if (i % 3 === 0 && i % 5 !==0) {
    console.log("fizz")
  } else if (i % 3 !==0 && i % 5 ===0) {
    console.log("buzz")
  } else if (i % 3 === 0 && i % 5 ===0) {
    console.log("fizzbuzz")
  } else {
      console.log(i)
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

let day=3;
switch(day){

  case 1:
    console.log("Lunedì")
    break;
  case 2:
    console.log("Martedì") 
    break;
  case 3:
    console.log("Mercoledì")
    break;
  case 4:
    console.log("Giovedì") 
    break;
  case 5:
    console.log("Venerdì")
    break;
  case 6:
    console.log("Sabato") 
    break;
  case 7:
    console.log("Domenica")
    break;
  default:
    console.log("Inserisci un valore tra 1 e 7 per favore");
    break;
}

//equivale a

if(day === 1)
  console.log("Lunedì")
else
  if(day === 2)
    console.log("Martedì")
  else
    if(day === 3)
    console.log("Mercoledì")
      //etc etc etc