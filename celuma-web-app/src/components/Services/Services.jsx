import axios from 'axios';

export const serviceSignIn = async (email, password) => {

    const data = {
        username:email,
        password: password
    };

    try {
        console.log(data)
        const response = await axios.post('http://localhost:8090/celuma-webapi/api/users/login', data);
        return response;
    } catch (error) {
        console.error("Hubo un error recuperando la información: ", error);
        throw error;
    }

}

export const serviceSignUp = async (username, name, lastname, email, password) => {


    const signUpData = {
        firstName: name,
        lastName: lastname,
        username: username,
        email: email,
        password: password,
    }

    try {
        const response = await axios.post('http://localhost:8090/celuma-webapi/api/users/register', signUpData)
        console.log(response)
        return response;
    } catch (error) {
        console.error("Hubo un error con el registro: ", error);
        throw error;
    }
}