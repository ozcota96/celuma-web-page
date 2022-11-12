function sendEmail() {
    'use strict'
    debugger;
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            var recipient = document.getElementById('email').value;
            Email.send({
                Host: 'smtp.gmail.com',
                Username: 'celuma-support@gmail.com',
                Password: '******',
                To: recipient,
                From: '',
                Subject: '',
                Body: '',
            })
            .then(function (message){
                window.location.href = './index.html';
            });
            console.log(recipient);
        }
    
        form.classList.add('was-validated')
        }, false);

        return;
    });
}