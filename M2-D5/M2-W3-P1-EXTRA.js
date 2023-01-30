// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

const giveMeRandom = function (n) {
    const arr = []
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 10))
    }
    return arr
  }
  
  const checkArray = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 5) {
        console.log(arr[i] + ' is bigger than 5')
        sum = sum + arr[i]
        //   sum += arr[i];
      } else {
        console.log(arr[i] + ' is not bigger than 5')
      }
    }
    console.log('The sum of the numbers greater than 5 is ' + sum)
  }
  
  checkArray(giveMeRandom(5))

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

const shoppingCart = [
    {
        id:321,
        name: "bluetooth",
        price: 100,
        quantity: 2,
    },

    {
        id:321,
        name: "laptop",
        price: 1000,
        quantity: 1,
    },

    {
        id:321,
        name: "usb",
        price: 20,
        quantity: 5,
    }
]

const shoppingCartTotal = function(){
    let totale = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totale = totale + shoppingCart[i].price * shoppingCart[i].quantity;
        //oppure...
        //totale += (shoppingCart[i].price * shoppingCart[i].quantity)
    }
    return totale
}
console.log(shoppingCartTotal)

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

const nuovoCart = {
        id:321,
        name: "usb",
        price: 20,
        quantity: 5,
    }
const addToShoppingCart = function (itemToAdd) {
    const newLength = shoppingCart.push[itemToAdd]
    return newLength;
}
console.log(addToShoppingCart(newItem))

/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (cart){
    let item = cart[0]
    for (let i = 1; i < cart.length; i++){
        if (cart[i].price > item.price) {
            item = cart[i]
        }
    }
    return item
}
console.log(maxShoppingCart(shoppingCart))

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

const latestShoppingCart = function(cart){
    let lastItem = cart[cart.length -1]
    return lastItem
}
console.log(latestShoppingCart(shoppingCart))

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

function loopUntil(x){
    let count = 0;
    while (count < 3) {
         let randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        if (randomNum > x) {
            count++;
        } else {
            count = 0;
        }
    }
}
loopUntil(3);

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

function average (array){
    let count = 0;
    let sum = 0;
    for (i=0; i< array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count ++;
        }
    }
    return count>0 ? sum/count:0;
    //se la variabile "count" è maggiore di 0, viene restituita la media aritmetica dei numeri dell'array, calcolata come "sum / count".
    //se "count" è uguale a 0, cioè non ci sono numeri nell'array, viene restituito 0.
}


/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

function longest(array){
    let long = "";
    for (i=0; i<array.length; i++) {
        if (typeof long[i] === 'string' && array[i].length > long.length) {
            long = array[i];
        }
    }
    return long; 
}

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

function filter(emailContent){
    if(emailContent.includes("SPAM") || emailContent.includes("SCAM")){
        return false
    } else {
        return true
    }
}
console.log(filter("questa email contiene SPAM"))

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

const data = function (selectData){
    let today = new Date();
    let diffDate = today - selectData;
    return Math.floor(diffDate/(1000*60*60*24))
}
console.log(data(new Date ("2023-01-27")))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const matrixGenerator = function(x, y){
    let matrix = [];
    for(let i = 0; i < y; i++){//determina il numero di righe della matrice
        for(let j = 0; j < x; j++){//determina il numero di colonne della matrice
            matrix.push(i.toString() + j.toString())//ad ogni interazione dei cicli uniamo il valore di i e j come stringhe e crea un elemento della matrice che sarà l'indice
        }
    }
    let carPerRow = matrix.length/y;//variabile del numero degli elementi per riga
    for(let z = 0; z < y; z++){//ci aiuta a stampare la matrice
        console.log(matrix.slice(zcarPerRow, (z+1)*carPerRow));//slice prende come argomenti la posizione iniziale e la posizione finale
    }
}
console.log(matrixGenerator(3, 4));
