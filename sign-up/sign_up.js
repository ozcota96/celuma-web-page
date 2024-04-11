function newUser() {
    // Get username
    let getUserName = document.getElementById("username");
    let username = getUserName.value;

    // Get  first name
    let getName = document.getElementById('first-name');
    let name = getName.value;

    // Get last name
    let getLastname = document.getElementById('last-name');
    let lastName = getLastname.value;

    // Get email
    let getEmail = document.getElementById('email');
    let email = getEmail.value;


    // Connection
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8090/celuma-webapi/api/users/save'
    Http.open('POST', url);
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    const body = JSON.stringify(
        {
            "username": username,
            "firstName": name,
            "userType": 1,
            "lastName": lastName,
            "email": email,
        }
    )

    Http.onload = () => {
        if (Http.readyState == 4 && Http.status >= 200) {
            //location.reload();
            console.log("Enviado")
        } else {
            console.log("Error!")
        }
    }
    Http.send(body);
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById("formulario");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    })
})