var email = prompt('Scrivi la tua email')

var listaEmail = ['mario@rossi.it', 'francesco@rossi.it', 'saverio@rossi.it'];

for (var i = 0; i < listaEmail.length; i++) {
    // console.log(listaEmail[i]);
    if (email == listaEmail[i]) {
        document.getElementById('email').innerHTML = 'Puoi Accedere'
    }
}
