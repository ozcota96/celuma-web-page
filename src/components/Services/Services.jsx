import axios from 'axios';
import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

export const serviceSignIn = async (username, password) => {

    const data = {
        username:username,
        password: password
    };

    try {
        const response = await axios.post('http://localhost:8090/celuma-webapi/api/users/login', data);
        console.log(response);
        sessionStorage.setItem('stored_username' , response.data.username);
        sessionStorage.setItem('stored_name' , response.data.firstName);
        sessionStorage.setItem('stored_lastname' , response.data.lastName);
        sessionStorage.setItem('stored_email' , response.data.email);
        sessionStorage.setItem('user_type', response.data.userType)
        localStorage.setItem('user_token' , response.data.jwt);
        localStorage.setItem('user_id', response.data.id)
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
        sessionStorage.setItem('stored_username' , response.data.username);
        return response;
    } catch (error) {
        if (error.response.data.includes('users.username_UNIQUE')) {
            return "El nombre de usuario ya existe";
        } else if (error.response.data.includes("users.email_UNIQUE"))
            return "El correo electrónico ya está registrado";
        return null;
    }
}

export const userDelete = async (user_id) => {


    const url = 'http://localhost:8090/celuma-webapi/api/users/delete/'+ user_id;
    const token = localStorage.getItem('user_token');

    
    try {
        const response = await axios.delete(url, {
            headers: { Authorization: `Bearer ${token}`}
    });
        console.log('User deleted successfully:', response.data);
        return true;
    } catch (error) {
        console.error('Error deleting user:', error.response ? error.response.data : error.message);
        return false;
    }
}