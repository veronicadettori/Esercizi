/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
Sono usati per classificare diverse tipologie di dati, abbiamo 5 tipologie:
-String - serie di caratteri racchiusi da apici singoli o doppi
    let auto1 = "panda"
    let auto2 = 'twingo'

-Number - rappresenta un numero, in js tutti i numeri sono numeri float; non c'è distinzione tra numeri decimali e interi

-Boolean - rappresenta un'entità logica e riporta due valori (vero e falso) 

-Undefined: una var è stata dichiarata, ma non ha un valore assegnato.
-Null: una variabile ha un valore "nessun oggetto", è nullo, è vuoto, non ha niente al suo interno; 
oppure ancora, se abbiamo già una variabile dichiarata con un valore al suo interno, possiamo "svuotarlo" sucessivamente usando null.

-Object - è un contenitore di valori eteronegei e messi insieme creano una struttura unica; 
vengono utilizzati per catalogare vari tipi di dati ed altri elementi più complessi. 
    let user = {     // un oggetto
        name: "John",  // una chiave "name" memorizza il valore "John"
        age: 30        // una chiave "age" memorizza 30
    }; 


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
Object - è un contenitore di valori eteronegei e messi insieme creano una struttura unica; 
vengono utilizzati per catalogare vari tipi di dati ed altri elementi più complessi.  

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12 + 20 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "veronica" 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = x - 4 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
    let name1 = "john"
    let name2 = "John"
    
    console.log(name1 === name2)
    
    console.log(name1.toLowerCase() == name2.toLowerCase())
