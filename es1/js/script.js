/*
Scopo del gioco:
Chiedi all’utente la sua email controlla che sia
nella lista di chi può accedere e stampa un
messaggio appropriato.

*/

var email = prompt('Scrivi la tua email')

var listaEmail = ['mario@rossi.it', 'francesco@rossi.it', 'saverio@rossi.it'];

for (var i = 0; i < listaEmail.length; i++) {
    // console.log(listaEmail[i]);
    if (email == listaEmail[i]) {
        document.getElementById('email').innerHTML = 'Puoi Accedere'
    }
}
