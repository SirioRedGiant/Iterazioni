/**
 ! LIVELLO 1: I FONDAMENTALI DEL CICLO FOR
 * 
 * ISTRUZIONI:
 * Risolvi gli esercizi uno alla volta. 
 * Usa console.log() per verificare i risultati.
 */

// EX 1: IL CONTO ALLA ROVESCIA
// Obiettivo: Stampa in console i numeri da 10 a 1 (inclusi) in ordine decrescente.
// Suggerimento: Parti da let i = 10 e usa l'operatore di decremento (i--).

// --- Scrivi qui il codice dell'esercizio 1 ---

let counter;

for (let i = 10; i > 0; i--) {
  counter = i;
  if (i >= 1) {
    console.log(counter);
  }
}

// -----------------------------------------------------------------------------
console.log(
  "============================================================================================================================================",
);

// EX 2: LA TABELLINA DEL 5
// Obiettivo: Stampa i risultati della tabellina del 5, partendo da 5 fino a 50.
// Risultato atteso: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50.

// --- Scrivi qui il codice dell'esercizio 2 ---

let tabellinaFive;

for (let i = 5; i <= 50; i++) {
  tabellinaFive = i;
  if (tabellinaFive % 5 === 0) {
    console.log(tabellinaFive);
  }
}

// -----------------------------------------------------------------------------
console.log(
  "========================================================================================================================================",
);

// EX 3: L'ACCUMULATORE (SOMMA TOTALE)
// Obiettivo: Calcola la somma di tutti i numeri presenti nell'array 'prezzi'.
// Stampa il risultato finale in console.

const prezzi = [15, 25, 30, 10, 20];
let totale = 0;

// --- Scrivi qui il codice dell'esercizio 3 ---

for (let i = 0; i < prezzi.length; i++) {
  totale += prezzi[i];
}
console.log("il totale è: " + totale);

// console.log("Il totale è:", totale); // Deve uscire 100
console.log(
  "===================================================================================================================================",
);
/**
 * LIVELLO 1.5: CONSOLIDAMENTO CICLI
 *
 * Obiettivo: Padroneggiare l'indice 'i' e le operazioni matematiche dentro il ciclo.
 */

// EX A: SOLO PARI DA 0 A 20
// Obiettivo: Stampa in console solo i numeri PARI da 0 a 20 (compresi).
// Suggerimento: Puoi incrementare i di 2 ad ogni giro (i += 2).

// --- Scrivi qui il codice ---

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// -----------------------------------------------------------------------------
console.log(
  "===================================================================================================================================",
);

// EX B: LA SOMMA DEI PRIMI 10 NUMERI
// Obiettivo: Calcola la somma di tutti i numeri da 1 a 10 e stampa il RISULTATO FINALE.
// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
// Risultato atteso: 55
let sommaDieci = 0;

// --- Scrivi qui il codice ---

for (let i = 1; i <= 10; i++) {
  sommaDieci += i;
}
console.log(sommaDieci);

// -----------------------------------------------------------------------------
console.log(
  "===================================================================================================================================",
);

// EX C: STRINGA RIPETUTA
// Obiettivo: Crea una variabile 'risultato' e, usando un ciclo, aggiungi la parola "Bla" per 5 volte.
// Risultato atteso in console: "BlaBlaBlaBlaBla"
let risultato = "";

// --- Scrivi qui il codice ---
for (let i = 1; i <= 5; i++) {
  risultato += "Bla";
}
console.log(risultato);

// -----------------------------------------------------------------------------
console.log(
  "===================================================================================================================================",
);

// EX D: CONTEGGIO SELETTIVO (IF DENTRO IL FOR)
// Obiettivo: Cicla i numeri da 1 a 30.
// Se il numero è divisibile per 10 (10, 20, 30), stampa "TRAGUARDO: [numero]".
// Altrimenti non stampare nulla.

// --- Scrivi qui il codice ---

for (let i = 1; i <= 30; i++) {
  if (i % 10 === 0) {
    const numero = i;
    console.log(`TRAGUARDO: [${numero}]`);
  }
}

console.log(
  "===================================================================================================================================",
);

/**
 * LIVELLO 1.6: ALLENAMENTO SULL'INDICE E LE STRINGHE
 */

// EX E: CONTEGGIO AL CONTRARIO CON MESSAGGIO
// Obiettivo: Stampa i numeri da 5 a 1.
// Quando arrivi a 1, dopo il numero stampa anche "PARTENZA!".
// Risultato atteso: 5, 4, 3, 2, 1 PARTENZA!

// --- Scrivi qui il codice ---
for (let i = 5; i >= 1; i--) {
  if (i === 1) {
    console.log(i + " PARTENZA!");
  } else {
    console.log(i);
  }
  
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");


// EX F: LA TABELLINA PERSONALIZZATA
// Obiettivo: Crea una variabile 'numeroBase'. 
// Stampa la tabellina di quel numero fino a moltiplicarlo per 10.
// Esempio: se numeroBase è 3, stampa: "3 x 1 = 3", "3 x 2 = 6" ... "3 x 10 = 30"
const numeroBase = 7; 

// --- Scrivi qui il codice ---
for (let i = 1; i <= 10; i++) {
  console.log(numeroBase + " * " + i + " = " + numeroBase * i);
  
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX G: CREA UN ELENCO PUNTATO
// Obiettivo: Data una stringa "elemento", usa un ciclo per stampare 4 volte:
// "1. elemento"
// "2. elemento"
// "3. elemento"
// "4. elemento"
// Suggerimento: Usa l'indice 'i' del ciclo per generare il numero dell'elenco.

// --- Scrivi qui il codice ---
let daStampare = "elemento"
for (let i = 1; i <= 4; i++) {  
  console.log(i + ". " + daStampare );  
}


console.log("===================================================================================================================================");


/**
 * LIVELLO 1.7: TRASFORMARE E FILTRARE
*/

// EX H: IL RADDOPPIATORE SILENZIOSO
// Obiettivo: Cicla i numeri da 1 a 10.
// Se il numero è MAGGIORE di 5, stampa il suo doppio (es: 6 diventa 12).
// Se è MINORE o UGUALE a 5, stampa il numero così com'è.

// --- Scrivi qui il codice ---

for (let i = 1; i <= 10; i++) {
  if (i <= 5) {
    console.log(i);    
  } else {
    console.log(i*2);    
  }
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX I: LA STRINGA CRESCENTE
// Obiettivo: Partendo da una stringa vuota, aggiungi un asterisco (*) ad ogni giro per 5 giri.
// Stampa la stringa ad OGNI giro.
// Risultato atteso:
// *
// **
// ***
// ****
// *****
let piramide = "";

// --- Scrivi qui il codice ---
for (let i = 1; i <= 5; i++) {
  piramide += "*"
  console.log(piramide);
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX J: SALTA IL NUMERO 3
// Obiettivo: Stampa i numeri da 1 a 5, ma quando arrivi al 3 non stampare nulla.
// Risultato atteso: 1, 2, 4, 5

// --- Scrivi qui il codice ---

for (let i = 1; i <= 5; i++) {
  if (i !== 3) {
    console.log(i)
  }
}


console.log("===================================================================================================================================");