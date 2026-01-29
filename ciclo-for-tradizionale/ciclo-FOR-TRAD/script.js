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


/**
 * LIVELLO 1.8: LOGICA DI CONFRONTO E ACCUMULATORI
*/

// EX K: IL CONTEGGIO DEI DISPARI
// Obiettivo: Cicla i numeri da 1 a 15.
// Invece di stampare i numeri, conta quanti numeri DISPARI ci sono.
// Stampa solo il risultato finale.
// Risultato atteso: 8
let quantiDispari = 0;

// --- Scrivi qui il codice ---
for (let i = 1; i <= 15; i++){
  if (i % 2 !== 0) {
    quantiDispari ++;
  } 
};
console.log(quantiDispari);



// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX L: LA STRINGA ALTERNATA
// Obiettivo: Cicla per 6 volte. 
// Se il giro è PARI aggiungi una "O" alla variabile 'stringa'.
// Se il giro è DISPARI aggiungi una "X".
// Stampa il risultato finale.
// Risultato atteso: "XOXOXO" (partendo dal presupposto che 1 è dispari)
let stringa = "";

// --- Scrivi qui il codice ---

for (let i = 1; i <= 6; i++){
  if (i % 2 !== 0) {
    stringa += "X"
  } else {
    stringa += "O"
  }
}
console.log(stringa);



// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX M: IL FILTRO DEI MULTIPLI
// Obiettivo: Cicla i numeri da 1 a 20.
// Stampa il numero solo se è divisibile per 3 O per 5.
// Risultato atteso: 3, 5, 6, 9, 10, 12, 15, 18, 20

// --- Scrivi qui il codice ---
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);    
  }
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX N: CAMBIO DI PASSO
// Obiettivo: Stampa i numeri da 10 a 100, ma saltando di 20 in 20.
// Risultato atteso: 10, 30, 50, 70, 90

// --- Scrivi qui il codice ---
for (let i = 10; i <= 100; i += 20) {
  console.log(i);
  
}





console.log("===================================================================================================================================");



/**
 * LIVELLO 1.9 (HARD): LOGICA PURA E MATEMATICA
 * 
 * ISTRUZIONI:
 * Questi richiedono più ragionamento. Prenditi tempo.
*/

// EX O: IL RE DEL RESTO (FIZZBUZZ BASE)
// Obiettivo: Cicla i numeri da 1 a 20.
// - Se il numero è divisibile sia per 3 che per 4, stampa "SUPER".
// - Se è divisibile solo per 3, stampa "TRE".
// - Se è divisibile solo per 4, stampa "QUATTRO".
// - Altrimenti, stampa il numero normale.

// --- Scrivi qui il codice ---
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("super");    
  }
  else if (i % 3 === 0) {
    console.log("TRE");    
  }
  else if (i % 4 === 0) {
    console.log("QUATTRO");    
  }
  else {
    console.log(i);    
  }
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX P: L'ACCUMULATORE SELETTIVO
// Obiettivo: Somma tra loro tutti i numeri da 1 a 50, 
// MA solo se sono numeri PARI.
// Stampa solo il risultato finale.
let sommaPari = 0;

// --- Scrivi qui il codice ---

for(let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sommaPari += i
  }
}
console.log(sommaPari);

// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX Q: TROVA IL DIVISORE
// Obiettivo: Dato il numero 'target', cicla tutti i numeri da 1 a 'target' (escluso).
// Stampa solo i numeri che possono dividere perfettamente il target (quelli con resto 0).
// Esempio con 12: dovrebbe stampare 1, 2, 3, 4, 6.
const target = 12;

// --- Scrivi qui il codice ---

for (let i = 1; i < target;i ++) {
  if (target % i === 0) {
    console.log(i);    
  }
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX R: LA STRINGA A SCACCHIERA
// Obiettivo: Crea una stringa di 8 caratteri totali.
// Deve alternare "#" e " " (spazio).
// Risultato atteso: "# # # # "
let scacchiera = "";

// --- Scrivi qui il codice ---

for (let i = 1; i <= 4;i++) {
  scacchiera += "# "
}
console.log(scacchiera);

//note rifare senza barare
let scacchiera2 = "";

for (let i = 1;i <= 8; i++) {
  if (i % 2 !== 0) {
    scacchiera2 += "#"
  }
  else {
    scacchiera2 += " "
  }
}




console.log("===================================================================================================================================");


/**
 * LIVELLO 2.1: LOGICA AVANZATA 
*/

// EX S: IL FILTRO INCROCIATO
// Obiettivo: Cicla i numeri da 1 a 30.
// Stampa il numero solo se:
// - È un multiplo di 2 
// - MA NON è un multiplo di 3
// (Esempio: 2 va bene, 4 va bene, 6 NO perché è multiplo di 3)

// --- Scrivi qui il codice ---
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0 && i % 3 !== 0) {
    console.log(i);    
  }
}


// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX T: IL SOMMATORE DI POTENZE
// Obiettivo: Calcola la somma dei quadrati dei numeri da 1 a 5.
// (1*1 + 2*2 + 3*3 + 4*4 + 5*5)
// Stampa solo il risultato finale.
let sommaQuadrati = 0;
//note 1+4+9+16+25

// --- Scrivi qui il codice ---
for (let i = 1; i <= 5; i++) {
  
  sommaQuadrati += i * i  
}
console.log(sommaQuadrati);



// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX U: CONTROLLO RANGE (DOPPIA CONDIZIONE)
// Obiettivo: Cicla i numeri da 1 a 50.
// Stampa il numero solo se:
// - È divisibile per 7 
// - OPPURE è un numero compreso tra 20 e 25 (inclusi).
// Suggerimento: (condizione1 || (condizione2 && condizione3))

// --- Scrivi qui il codice ---

for (let i = 1; i <= 50; i++) {
  if (i % 7 === 0 || i >= 20 && i <= 25) {
    console.log(i);    
  }  
}



// -----------------------------------------------------------------------------
console.log("===================================================================================================================================");



// EX V: IL CONTEGGIO DELLA LETTERA "e"
// Obiettivo: Data la stringa 'frase', usa un ciclo for per contare quante 
// volte appare la lettera "e" (sia minuscola che MAIUSCOLA).
// Suggerimento: 'frase.length' ti dà la lunghezza, 'frase[i]' ti dà la lettera.
const frase = "Educare e Elevare le menti";
let conteggioE = 0;

// --- Scrivi qui il codice ---

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === "e" || frase[i] === "E") {
    conteggioE += 1
  }
}
console.log(conteggioE);





console.log("===================================================================================================================================");