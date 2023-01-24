// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
  prices: [34,1,17,26]
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
  prices: [12,23,34,45]
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
  prices: [12,23,34,45]
}

const prices = [34, 5, 2]
const shippingCost = 50;

function carrello(utente) {
  let sum = 0; 
  for (let i = 0; i < utente.prices.length; i++) {
    sum += utente.prices[i];
  };
  return sum; 
}

function price(utente) {

  let valoreCarrello = carrello(utente);
  console.log("Valore iniziale carrello "+valoreCarrello)

  if (utente.isAmbassador) {
    console.log("L'utente è ambassador")
    valoreCarrello -= valoreCarrello * 0.30;
  } 

  if (valoreCarrello <= 100 ) {
    console.log("Il carrello non supera i 100€")
    valoreCarrello += shippingCost; 
  } else {
    console.log("Il carrello supera i 100")
  }
  console.log("Valore finale carrello "+valoreCarrello)

  return valoreCarrello;
}

console.log(price(paul))