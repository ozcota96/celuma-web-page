const contactAlertPlaceholder = document.getElementById('contact-alert');

const alert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        `   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
        `</div>`
    ].join('');
    contactAlertPlaceholder.innerHTML = '';
    contactAlertPlaceholder.append(wrapper);
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
                //sendEmail();
            }
        
            event.preventDefault();

            alert('Ups! Algo salió mal. Estamos trabajando en ello.', 'danger');

            form.classList.add('was-validated');
        }, false);

        return;
    });
}

// Enable back when contact page is functional
// function generateMessageTemplate(){
//     var firstName = document.getElementById('first-name').value;
//     var lastName = document.getElementById('last-name').value;
//     var subject = document.getElementById('subject').value;
//     var message = document.getElementById('message-body').value;

//     var messageTemplate = 
//     `Nuevo mensaje de contacto:\n
//     De: ${firstName} ${lastName}\n
//     Asunto: ${subject}\n
//     Mensaje: ${message}`;

//     return messageTemplate;
// }

// function sendEmail() {
//    const request = new XMLHttpRequest();
   
//    request.open('GET', 'http://127.0.0.1:8000/contact/', true);
//    request.send();

//    request.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         alert(request.responseText);
//     }
//     else{
//         alert(request.status);
//     }
//    }
// }