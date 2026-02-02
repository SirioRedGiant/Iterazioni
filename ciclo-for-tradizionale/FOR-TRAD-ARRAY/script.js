/**
 * LIVELLO 3.1: FONDAMENTA DEGLI ARRAY
 *
 * Obiettivo: Imparare a leggere e scrivere negli array usando il ciclo for.
 */

// EX 1: IL BANDITORE
// Obiettivo: Cicla l'array 'nomi' e per ogni nome stampa: "Benvenuto [nome]!".
const nomi = ["Edoardo", "Simone", "Francesco"];

// --- Scrivi qui il codice ---
for (let i = 0; i < nomi.length; i++) {
  console.log("Benvenuto " + nomi[i] + "!");
}

// -----------------------------------------------------------------------------
console.log(
  "=============================================================================================================================================================",
);

// EX 2: COPIA SELETTIVA
// Obiettivo: Cicla l'array 'numeri'. Se il numero è MAGGIORE di 10,
// inseriscilo nell'array 'numeriGrandi' usando .push().
// Alla fine stampa 'numeriGrandi'.
const numeri = [5, 12, 8, 20, 3, 15];
const numeriGrandi = [];

// --- Scrivi qui il codice ---

for (let i = 0; i < numeri.length; i++) {
  if (numeri[i] > 10) {
    numeriGrandi.push(numeri[i]);
  }
}
console.log(numeriGrandi);

// -----------------------------------------------------------------------------
console.log(
  "=============================================================================================================================================================",
);

// EX 3: TRASFORMAZIONE (RADDOPPIO)
// Obiettivo: Crea un nuovo array 'raddoppiati'.
// Cicla l'array 'base' e inserisci nel nuovo array il valore moltiplicato per 2.
const base = [1, 2, 3, 4, 5];
const raddoppiati = [];

// --- Scrivi qui il codice ---

for (let i = 0; i < base.length; i++) {
  raddoppiati.push(base[i] * 2);
}
console.log(raddoppiati);

// -----------------------------------------------------------------------------
console.log(
  "=============================================================================================================================================================",
);

// EX 4: IL CONTEGGIO DEGLI ELEMENTI
// Obiettivo: Dato l'array 'oggetti', conta quante volte appare la parola "Mela".
// Stampa solo il risultato finale.
const cesto = ["Mela", "Pera", "Mela", "Arancia", "Mela"];
let contaMele = 0;

// --- Scrivi qui il codice ---

for (let i = 0; i < cesto.length; i++) {
  if (cesto[i] === "Mela") {
    contaMele += 1;
  }
}
console.log(contaMele);

console.log(
  "=============================================================================================================================================================",
);

/**
 * LIVELLO 3.2: LOGICA APPLICATA AGLI ARRAY
 */

// EX 5: LA MEDIA DEI VOTI
// Obiettivo: Calcola la somma di tutti i voti nell'array e poi
// calcola la media (Somma totale diviso il numero di elementi).
// Stampa sia la somma che la media.
const voti = [24, 28, 30, 18, 22];
let sommaVoti = 0;

// --- Scrivi qui il codice ---
for (let i = 0; i < voti.length; i++) {
  sommaVoti += voti[i];
}
console.log(sommaVoti);
console.log(sommaVoti / voti.length);

// -----------------------------------------------------------------------------
console.log(
  "=============================================================================================================================================================",
);

// EX 6: TROVA L'INDICE (RICERCA MANUALE)
// Obiettivo: Cicla l'array 'nomi'. Se trovi il nome "Marco",
// stampa "Marco è in posizione: [i]".
// Se non lo trovi, non stampare nulla.
const nomi2 = ["Anna", "Luca", "Marco", "Sara"];

// --- Scrivi qui il codice ---
for (let i = 0; i < nomi2.length; i++) {
  if (nomi2[i] === "Marco") {
    console.log(`Marco è in posizione: ${i}`);
  }
}

// -----------------------------------------------------------------------------
console.log(
  "=============================================================================================================================================================",
);

// EX 7: IL FILTRO DEI NOMI CORTI
// Obiettivo: Dato un array di città, crea un nuovo array 'cittaCorte'
// che contenga solo le città con meno di 5 lettere.
const citta = ["Roma", "Napoli", "Pisa", "Milano", "Asti"];
const cittaCorte = [];

// --- Scrivi qui il codice ---

for (let i = 0; i < citta.length; i++) {
  if (citta[i].length < 5) {
    cittaCorte.push(citta[i]);
  }
}
console.log(cittaCorte);

// -----------------------------------------------------------------------------
console.log(
  "=============================================================================================================================================================",
);

// EX 8: IL RILEVATORE DI NUMERI NEGATIVI
// Obiettivo: Cicla l'array 'temperature'. Se trovi ANCHE SOLO UN numero minore di 0,
// cambia la variabile 'allarme' in true e stampa "Pericolo gelo!".
const temperature = [4, 12, -2, 8, 5];
let allarme = false;

// --- Scrivi qui il codice ---
for (let i = 0; i < temperature.length; i++) {
  if (temperature[i] < 0) {
    allarme = true;
    console.log("Pericolo gelo!");
  }
}

console.log(
  "=============================================================================================================================================================",
);

/**
 * LIVELLO 3.4: LOGICA AVANZATA SU ARRAY SEMPLICI
 */

// EX 13: IL CONFRONTO TRA LISTE
// Obiettivo: Dati due array di numeri della stessa lunghezza, crea un terzo array
// 'risultato' che contenga la SOMMA dei numeri nelle stesse posizioni.
// Esempio: [1, 2] + [10, 20] => [11, 22]
const listaA = [5, 10, 15, 20];
const listaB = [2, 4, 6, 8];
const listaSommata = [];

// --- Scrivi qui il codice ---

// -----------------------------------------------------------------------------
console.log(
  "====================================================================================================================================================",
);

// EX 14: IL RILEVATORE DI DOPPIONI (BASE)
// Obiettivo: Dato un array di parole e una 'parolaChiave', conta quante volte
// la parola chiave appare, ma stampa un messaggio SOLO se appare più di una volta.
const archivio = ["Test", "Ciao", "Mela", "Test", "Uva", "Test"];
const parolaChiave = "Test";
let contatoreChiave = 0;

// --- Scrivi qui il codice ---
for (let i = 0; i < archivio.length; i++) {
  if (archivio[i] === parolaChiave) {
    contatoreChiave += 1;
  }
}
if (contatoreChiave >= 2) {
  console.log(contatoreChiave);
}

// -----------------------------------------------------------------------------
console.log(
  "====================================================================================================================================================",
);

// EX 15: IL FILTRO DEGLI INDICI PARI
// Obiettivo: Dato l'array 'numeri', inserisci nell'array 'risultato' solo i numeri
// che si trovano in una POSIZIONE (indice i) pari.
// Nota: Non stiamo guardando se il numero è pari, ma se lo è la sua posizione!
const dati = [100, 200, 300, 400, 500, 600];
const risultatoPosizioniPari = [];

// --- Scrivi qui il codice ---
for (let i = 0; i < dati.length; i++) {
  if (i % 2 === 0) {
    risultatoPosizioniPari.push(dati[i]);
  }
}
console.log(risultatoPosizioniPari);

// -----------------------------------------------------------------------------
console.log(
  "====================================================================================================================================================",
);

// EX 16: TROVA IL MINIMO (NON IL MASSIMO!)
// Obiettivo: Trova il numero PIÙ PICCOLO all'interno dell'array 'temperature'.

const temperature2 = [15, 8, 22, 3, 10, 12];
let min = temperature2[0];

// --- Scrivi qui il codice ---
for (let i = 0; i < temperature2.length; i++) {
  if (temperature2[i] < min) {
    min = temperature2[i];
  }
}
console.log(min);

console.log(
  "====================================================================================================================================================",
);

/**
 * LIVELLO 3.5: ARRAY "BRAIN-MELTER"
 */

// EX 17: IL RILEVATORE DI "DOPPIONI GENERICI"
// Obiettivo: Senza usare una parola chiave fissa, controlla se l'array 'numeri'
// contiene almeno un numero duplicato (anche se non sai quale).
// Se trovi un duplicato, imposta 'haDuplicati' a true e ferma il ciclo.
const numeriDuplicati = [10, 5, 8, 3, 12];
let haDuplicati = false;

// --- Scrivi qui il codice ---

//for (let i = 0; i < numeriDuplicati.length; i++) {
//    for (let d = i + 1; d < numeriDuplicati.length; d++) {
//        if (numeriDuplicati[i] === numeriDuplicati[d]) {
//            haDuplicati = true;
//            break; //note esce dal ciclo interno
//        }
//    }
//    if (haDuplicati) {
//        break; //note esce dal ciclo esterno
//    }
//}
//console.log(haDuplicati);

const verificaDoppioni = [];

//  numeriDuplicati[0] => numeriDuplicati[0]
//  numeriDuplicati[0] => numeriDuplicati[1]
//  numeriDuplicati[0] => numeriDuplicati[2]
//  numeriDuplicati[0] => numeriDuplicati[3]
//  numeriDuplicati[0] => numeriDuplicati[4]

//  numeriDuplicati[1] => numeriDuplicati[0]
//  numeriDuplicati[1] => numeriDuplicati[1]
//  numeriDuplicati[1] => numeriDuplicati[2]
//  numeriDuplicati[1] => numeriDuplicati[3]
//  numeriDuplicati[1] => numeriDuplicati[4]

for (let i = 0; i < numeriDuplicati.length; i++) {
  for (let d = 0; d < numeriDuplicati.length; d++) {
    // console.log(
    //   `${numeriDuplicati[i]} === ${numeriDuplicati[d]} && ${i} != ${d}`,
    // );
    if (numeriDuplicati[i] === numeriDuplicati[d] && i != d) {
      haDuplicati = true;
    }
  }
}
console.log(haDuplicati);

// -----------------------------------------------------------------------------
console.log(
  "====================================================================================================================================================",
);

// EX 18: LA DIFFERENZA MASSIMA
// Obiettivo: Trova la differenza più grande tra due numeri consecutivi nell'array.
// Esempio: [10, 15, 30] -> la differenza tra 10 e 15 è 5, tra 15 e 30 è 15. Risultato: 15.
const serie = [5, 10, 25, 30, 60, 65];
let diffMassima = 0;

// --- Scrivi qui il codice ---

// -----------------------------------------------------------------------------
console.log(
  "====================================================================================================================================================",
);

// EX 19: UNIONE E FILTRO (SENZA DOPPIONI)
// Obiettivo: Dati due array 'lista1' e 'lista2', crea un terzo array 'unione'
// che contenga tutti gli elementi, MA solo se non sono già presenti (niente doppioni nell'unione).
// Suggerimento: usa .includes() per controllare se un elemento c'è già prima di fare .push().
const lista1 = ["Mela", "Pera"];
const lista2 = ["Uva", "Mela", "Banana"];
const unioneSenzaDoppioni = [];

// --- Scrivi qui il codice ---

// -----------------------------------------------------------------------------
console.log(
  "====================================================================================================================================================",
);

// EX 20: L'INVERTITORE DI POSIZIONI (SWAP)
// Obiettivo: Dato un array di 2 elementi, scambia la loro posizione senza creare un nuovo array.
// Risultato atteso: ["Fine", "Inizio"]
const coppia = ["Inizio", "Fine"];

// --- Scrivi qui il codice ---

console.log(
  "====================================================================================================================================================",
);
