/*
Scopo del gioco:
Chiedi all’utente la sua email controlla che sia
nella lista di chi può accedere e stampa un
messaggio appropriato.

*/

var email = prompt('Scrivi la tua email')   // definisco una variabile dove metto l'input dell'utente

var listaEmail = ['mario@rossi.it', 'francesco@rossi.it', 'saverio@rossi.it'];  // elenco liste email

for (var i = 0; i < listaEmail.length; i++) {   // verifico se l'email ricevuta dall'input e' contenuta nell'array, in caso positivo stampo a schermo 'puoi accedere'
    // console.log(listaEmail[i]);
    if (email == listaEmail[i]) {
        document.getElementById('email').innerHTML = 'Puoi Accedere'
    }
}
