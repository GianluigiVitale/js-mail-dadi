/*
Scopo del gioco:
Gioco dei dadi, chi fa di più vince

*/


var dado1 = Math.floor(Math.random() * 6) + 1;  // creo una variabile con un numero casuale da 1 a 6 inclusi.
console.log(dado1);
var dado2 = Math.floor(Math.random() * 6) + 1;  // creo una Seconda variabile con un numero casuale da 1 a 6 inclusi.
console.log(dado2);

document.getElementById('punteggio-dado-1').innerHTML = dado1
document.getElementById('punteggio-dado-2').innerHTML = dado2

if (dado1 > dado2) {                                                     // se il numero del primo dado e' maggiore del secondo allora stampo a schermo 'vince dado1'
    document.getElementById('dado-vincitore').innerHTML = 'Vince Dado 1'
} else if (dado1 < dado2) {                                              // se il numero del secondo dado e' maggiore del primo allora stampo a schermo 'vince dado2'
    document.getElementById('dado-vincitore').innerHTML = 'Vince Dado 2'
} else {                                                                 // se i numeri sono uguali stampo a schermo 'nessun vincitore'
    document.getElementById('dado-vincitore').innerHTML = 'Nessun Vincitore'
}
