/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2) {
    return l1*l2;
}
console.log(area(12,23))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1,num2) {
    crazySum = num1 + num2;
    if (num1 === num2) {
        return crazySum = (num1 + num2)* 3;
    }
}
console.log(crazySum(12,12))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (num1) {
    crazyDiff = num1 - 19;
    if (crazyDiff > 19) {
        return crazyDiff = (num1-19)* 3;
    }
}
console.log(crazyDiff(67))

//

const crazyDiffUno = function (numero) {
    if (numero > 19) {
        return Math.abs((numero-19)*3)
    } else {
        return Math.abs(numero-19)
    }
}
console.log(crazyDiffUno(45));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary (num1) {  
    if((num1 >= 20 && num1 <= 100 ) || num1 === 400) {
        return true;
    }
return false;
}
console.log(boundary(23))
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string) {
    if (string.startsWith("code")) { //usato per controllare se la stringa inizia con un determinato prefisso/carattere
        return string;
      } else {
        return "code " + string;
      }
}
console.log(codify(hello))

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(int) {
    int = Math.abs(parseInt(int));
    if (int % 3 === 0 || int % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7("18"))

//

const check3and7Uno = function(n) {
    if (n >= 0 && (n % 3 ===0 || n % 7 === 0)){
        return true;
    } else {
        return false;
    }
}
console.log(check3and7Uno(17))

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

const upperFirstPHRASE = function(str){
    let words = str.split("")
    let finalString = []
    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i].charAt (0)
        console.log(firstChar)
        let uppercaseChar = firstChar.toUpperCase()
        let cutString = words[i].slice(1)
        let finalWord = uppercaseChar + cutString 
        finalString.push(finalWord) 
    } console.log(finalString.join(""))
}
upperFirstPHRASE("hello world")

// il risultato in console è diverso, vedi entrambi

const upperFirstPhrase = function (str) {
  
    let words = str.split(' ')
    let finalString = []
    for (let i = 0; i < words.length; i++) {
      let firstChar = words[i].charAt(0)
      console.log(firstChar)
      let uppercaseChar = firstChar.toUpperCase()
      let cutString = words[i].slice(1)
      let finalWord = uppercaseChar + cutString
      finalString.push(finalWord)
    }
    console.log(finalString.join(''))
  }
  upperFirstPhrase('hello world')

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

const cutString = function(str){
    return str.slice(1,str.length - 1)
}
console.log(cutString("EPICODE")) 

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

const giveMeRandom = function(n){
    const arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() *10 ))
    } 
    return arr
}
console.log(giveMeRandom(5))