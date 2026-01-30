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
console.log("=============================================================================================================================================================");



// EX 2: COPIA SELETTIVA
// Obiettivo: Cicla l'array 'numeri'. Se il numero è MAGGIORE di 10, 
// inseriscilo nell'array 'numeriGrandi' usando .push().
// Alla fine stampa 'numeriGrandi'.
const numeri = [5, 12, 8, 20, 3, 15];
const numeriGrandi = [];

// --- Scrivi qui il codice ---

for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > 10) {
        numeriGrandi.push(numeri[i])
    }
}
console.log(numeriGrandi);


// -----------------------------------------------------------------------------
console.log("=============================================================================================================================================================");



// EX 3: TRASFORMAZIONE (RADDOPPIO)
// Obiettivo: Crea un nuovo array 'raddoppiati'. 
// Cicla l'array 'base' e inserisci nel nuovo array il valore moltiplicato per 2.
const base = [1, 2, 3, 4, 5];
const raddoppiati = [];

// --- Scrivi qui il codice ---

for (let i = 0; i < base.length; i++) {
    raddoppiati.push(base[i] * 2)
}
console.log(raddoppiati);

// -----------------------------------------------------------------------------
console.log("=============================================================================================================================================================");



// EX 4: IL CONTEGGIO DEGLI ELEMENTI
// Obiettivo: Dato l'array 'oggetti', conta quante volte appare la parola "Mela".
// Stampa solo il risultato finale.
const cesto = ["Mela", "Pera", "Mela", "Arancia", "Mela"];
let contaMele = 0;

// --- Scrivi qui il codice ---

for (let i = 0; i < cesto.length; i++) {
    if (cesto[i] === "Mela") {
        contaMele += 1
    }
}
console.log(contaMele);

console.log("=============================================================================================================================================================");


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
    sommaVoti += voti[i]
}
console.log(sommaVoti);
console.log(sommaVoti / voti.length);



// -----------------------------------------------------------------------------
console.log("=============================================================================================================================================================");



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
console.log("=============================================================================================================================================================");



// EX 7: IL FILTRO DEI NOMI CORTI
// Obiettivo: Dato un array di città, crea un nuovo array 'cittaCorte' 
// che contenga solo le città con meno di 5 lettere.
const citta = ["Roma", "Napoli", "Pisa", "Milano", "Asti"];
const cittaCorte = [];

// --- Scrivi qui il codice ---

for (let i = 0; i < citta.length; i++) {
    if (citta[i].length < 5) {
        cittaCorte.push(citta[i])
    }
}
console.log(cittaCorte);


// -----------------------------------------------------------------------------
console.log("=============================================================================================================================================================");



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





console.log("=============================================================================================================================================================");