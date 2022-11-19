function generateMessageTemplate(){
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message-body').value;

    var messageTemplate = 
    `Nuevo mensaje de contacto:\n
    De: ${firstName} ${lastName}\n
    Asunto: ${subject}\n
    Mensaje: ${message}`;

    return messageTemplate;
}

function sendEmail() {
    // Server side code with Django
}

function validateForm(){
    'use strict'
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            sendEmail();
        }
    
        form.classList.add('was-validated')
        }, false);

        return;
    });
}