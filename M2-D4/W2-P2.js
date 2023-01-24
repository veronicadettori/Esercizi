/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

  let arrayDispari = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !==0) {
      array.push(i);
    }
  }
  console.log(array);

/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

  let arrayRandomUno = [];
  for(var i = 0; i < 10; i++) {
    arrayRandomUno [i] = Math.random() * (100);
  }  
  console.log(arrayRandomUno)

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

  let numPariUno= [1,2,3,4,5,6,7,8,9,10];
  for (var i=0; i <= numPariUno.length; i++) {
    if (numPariUno [i]% 2 !== 1) {
      console.log(numPariUno[i]);
    }
  }

  //

  let numPari= [1,2,3,4,5,6,7,8,9,10];
  for (var i=0; i <= numPari.length; i++) {
    if (numPari [i]% 2 === 0) {
      console.log(numPari[i]);
    }
  }

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

//

let cat = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;
for (let i=0; i< cat.length; i++){
  soma+=cat[i];
}

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

let cot = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < cot.length; i++){
cot[i]++;
};
console.log(cot);

//

function incremento(arr) {
  return arr.map(val => {
    if (typeof val === "number") {
      return val+1;
    }
  })
}

const values = [1, 'a', 3, 'b'];
const incrementAdValues = incremento(values);
console.log(incrementAdValues);

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

let levaIPari = [1,2,3,4,5,6,7,8,9];
levaIPari= levaIPari.filter (e => e % 2 !==0 );
console.log(levaIPari);

//

//splice consente di rimuovere/aggiungere qualcosa nell'array
const arr7 = [1,4,7,9,6,4,5];
for (let i=0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) {
    arr7.splice (i--, 1); 
  }
}
console.log(arr7);

/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

let elementi = [];
for(let i=0; i< 10; i++) {
  elementi[i] = Math.random() * (10) +1;
}
console.log(elementi);

//

const arr8 = [];
while (arr8.length < 10) { //così prende tutti i contenuti
  const rand = Math.floor (Math.random() * 101 + 1)
  if (!arr8.includes(rand)) {
    arr8.push(rand)
  }
} 

/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

//così conto le parole che ci sono dentro
var oggettiScolastici = ['gomma', 'quaderno', 'matita'];
for(let i = 0; i < oggettiScolastici.length; i++) {
  let stringaAttuale = oggettiScolastici[i];
  oggettiScolastici[i] = stringaAttuale.length;
}
console.log(oggettiScolastici);

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let reverseNum = [1,3,5];
let reverseArray = reverseNum.reverse();
console.log(reverseArray);

//

function arrayBoh(arr) {
  let arrayNumeroDue = [];
  for (let i= arr.length - 1; i >= 0; i--) {
    arrayNumeroDue.push(arr[i]);
  } 
  return arrayNumeroDue;
}
let tempera = [1,3,55,"f"];
let restock = arrayBoh(tempera);
console.log(restock);
//unshift è il contrario di push

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

let estraiIlMassimo = [2,4,6,7,9];
var m = Math.max(...estraiIlMassimo);
console.log(m)

//

let highNum = [1,2,3,4,5,5,6,7];
let maximum = highNum.reduce(function (a,b) {
  return Math.max(a.b);
});
console.log(maximum);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

let vecchio;
for (let movie of movies) {
  if (vecchio === undefined) {
    vecchio = movie;
  } else {
    if (parseInt(movie.Year) < parseInt(vecchio.Year)) {
      vecchio = movie;
    }
  }
}

//

movies.sort(function(a,b){
  return parseInt(a.Year) - parseInt(b.Year);
});
console.log(movies[0]);

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

console.log(movies.length);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

let title = [];
for (let movie of movies){
  title.push(movie.Title);
}
console.log(title);

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const currentMillenniumMovies = movies.filter(movie => {
const year = movie.Year;
return year >= 2000 && year <= 2024;
});

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'

for (let movie of movies) {
  if (movie.imdbID === id) {
    console.log(movie);
    break;
  }
}

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let sommare = 0;
for (let movie of movies) {
  sommare += parseInt(movie.Year);
}
console.log(sommare);

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

function cercaLaParola (parola) {
  let trovato = [];
  for (let movies of movies) {
    if (movie.Title.includes(parola)) {
      result.push(movie);
    }
  }
}
console.log(cercaLaParola("formica"))

//

const word = 'Lord';
const moviesContainingWord = movies.filter(movie => {
  // Verifichiamo se il titolo del film contiene la parola cercata
  return movie.Title.includes(word);
});