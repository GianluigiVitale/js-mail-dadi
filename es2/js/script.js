var dado1 = Math.floor(Math.random() * 6) + 1;
console.log(dado1);
var dado2 = Math.floor(Math.random() * 6) + 1;
console.log(dado2);

document.getElementById('punteggio-dado-1').innerHTML = dado1
document.getElementById('punteggio-dado-2').innerHTML = dado2

if (dado1 > dado2) {
    document.getElementById('dado-vincitore').innerHTML = 'Vince Dado 1'
} else if (dado1 < dado2) {
    document.getElementById('dado-vincitore').innerHTML = 'Vince Dado 2'
} else {
    document.getElementById('dado-vincitore').innerHTML = 'Nessun Vincitore'
}
