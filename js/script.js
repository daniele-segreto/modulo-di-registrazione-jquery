$(document).ready(function () {
    
    // FUNZIONE DI REGISTRAZIONE
    $('#registrazione').click(function (e) {
        e.preventDefault();
        // alert('prova-alert');
        
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confermaPassword = $('#confermaPassword').val();
        // alert(username + ' ' + email + ' ' + password + ' ' + confermaPassword);
        
        if (username !== '') {
            alert('Il tuo username è stato inserito correttamente!');
            localStorage.setItem('username', username);
        } else {
            alert('Inserisci un username!');
        }
        
        if (email.includes('@')) {
            alert('Hai inserito una email corretta!')
            localStorage.setItem('email', email);
        } else {
            alert('Inserisci una email corretta!')
        }
        
        if (password !== confermaPassword) {
            alert('Le due password non coincidono!')
        } else {
            alert('Le due password coindidono!');
            localStorage.setItem('password', password);
        }
        
        if (email === localStorage.getItem('email')) {
            window.location.href = "../login.html";
        }
    });
    
    // FUNZIONE DI LOGIN
    $('#accesso').click(function (e) {
        e.preventDefault();
        // alert('prova-alert');
        
        let username = localStorage.getItem('username');
        let email = $('#email').val();
        let password = $('#password').val();
        // alert(username + ' ' + email + ' ' + password);
        
        if (email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            alert('Accesso consentito!');
            localStorage.setItem('loggato', 'true'); // setto accesso a true
            localStorage.setItem('utenteLoggato', username); // setto il nome dell'utente loggato
            window.location.href = "../bacheca.html";
        } else {
            alert('Accesso negato!');
        }
        
    });
    
    // SE L'UTENTE E' LOGGATO
    if (localStorage.getItem('loggato') === 'true') {
        $('#bacheca').css('display', 'block');
        $('#username-logout').css('display', 'block').text(localStorage.getItem('utenteLoggato'));
        $('#registrati').css('display', 'none');
        $('#login').css('display', 'none');
        $("#pagina-bacheca").show(); // MOSTRO IL CONTENUTO DELLA PAGINA BACHEVA
        $("#guardia-bacheca").hide(); // NASCONDO LA GUARDIA (IL MESSAGGIO DI ACCESSO NEGATO)
        
        // PROTEGGO LE ROTTE DI REGISTRAZIONE E LOGIN
        $('#pagina-registrazione').html('<h1>Mi spiace, non hai accesso a questa pagina!</h1>').css('text-align', 'center').css('margin-top', '50px');
        $('#pagina-login').html('<h1>Mi spiace, non hai accesso a questa pagina!</h1>').css('text-align', 'center').css('margin-top', '50px');
    }
    
    // FUNZIONE DI LOGOUT
    $('#logout').click(function (e) { 
        e.preventDefault();
        // alert('prova-alert');
        
        localStorage.setItem('loggato', 'false');
        $('#bacheca').css('display', 'none');
        $('#username-logout').css('display', 'none');
        $('#registrati').css('display', 'block');
        $('#login').css('display', 'block');
        window.location.href = "../index.html";
    });
    
});