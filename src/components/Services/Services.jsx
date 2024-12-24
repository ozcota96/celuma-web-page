import axios from 'axios';
import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
const apiUrl = process.env.REACT_APP_API_URL;

    // Account
    export const serviceSignIn = async (username, password) => {

    const data = {
        username:username,
        password: password
    };

    try {
        const response = await axios.post(`${apiUrl}/users/login`, data);
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
    };

    export const serviceSignUp = async (username, name, lastname, email, password) => { 

        const signUpData = {
            firstName: name,
            lastName: lastname,
            username: username,
            email: email,
            password: password,
        }

        try {
            const response = await axios.post(`${apiUrl}/users/register`, signUpData)
            sessionStorage.setItem('stored_username' , response.data.username);
            return response;
        } catch (error) {
            if (error.response.data.includes('users.username_UNIQUE')) {
                return "El nombre de usuario ya existe";
            } else if (error.response.data.includes("users.email_UNIQUE"))
                return "El correo electrónico ya está registrado";
            return null;
        }
    };


    // Users
    export const getUsers = async () => {

        const url = `${apiUrl}/users/all`;
        const token = localStorage.getItem('user_token');

        try {
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${token}`}
            });
            return response.data;
        } catch (error) {
            console.error('Error al recuperar usuarios: ' + error.response);
            return false;
        }
    };

    export const getUser = async (user_id) => {
        const url =`${apiUrl}/users` + user_id + '/user';
        const token = localStorage.getItem('user_token');

        try {
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${token}`}
            });
            console.log(response.data);
            sessionStorage.setItem('stored_lastname' , response.data.lastName);
            return response;
        } catch (error) {
            console.error('Error al recuperar usuario: ' + error.response);
            return false;
        }
    };

    export const userDelete = async (user_id) => {


        const url = `${apiUrl}/users/${user_id}/delete`;
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
    };

    export const userUpdate = async (name, lastname, userId, email) => {

        const url = `${apiUrl}/users/${userId}/update`;
        const token = localStorage.getItem('user_token');

        const data = {
            lastName: lastname,
            firstName: name,
            email: email
        }

        try {
            const response = axios.patch(url, data, {
                headers: {Authorization: `Bearer ${token}`}
            })        

            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }

    };


    // Products
    export const getProducts = async () => {

        const url = `${apiUrl}/products/all`;
        const token = localStorage.getItem('user_token');

        try {
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${token}`}
            });
            console.log(response)
            return response.data;
        } catch (error) {
            console.error('Error al recuperar productos: ' + error.response);
            return false;
        }
    };

    export const updateProduct = async (newName, newDescription) => {

        const url = `${apiUrl}/prducts/`;
        const token = localStorage.getItem('user_token');

        const data = {
            name: newName,
            description: newDescription
        }

        try {
            const response = axios.patch(url, data, {
                headers: {Authorization: `Bearer ${token}`}
            });
        } catch (error) {
            
        }

    };