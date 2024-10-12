import React, { useState } from "react";
import './EditAccount.css';
import { getUser, userUpdate } from "../Services/Services";

const EditAccount = () => {

    const [name, setName] = useState(sessionStorage.getItem('stored_name') || '');
    const [lastname, setLastName] = useState(sessionStorage.getItem('stored_lastname' || ''))
    const [userId, setUserId] = useState(localStorage.getItem('user_id'));

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleLastnameChange = (e) => {
        setLastName(e.target.value)
    }

    const updateUser = async () => {
        try {

            await userUpdate(name, lastname, userId);

            await get_user();
            window.location.href="/profile";
        } catch (error) {
            console.error('Error during update: ', error);
        }
    };

    const get_user = async () => {
        try {
            const response = await getUser(userId);
            if (response) {
                const updatedUser = response.data;
                setName(updatedUser.firstName);
                setLastName(updatedUser.lastName);
                sessionStorage.setItem('stored_name', updatedUser.firstName);
                sessionStorage.setItem('stored_lastname', updatedUser.lastName);
            }
        } catch (error) {
            console.error('Error fetching user: ', error);
        }
    };


    return(
        <div className="edit-acount-container">
            <form className="edit-account-formulario" >
                <label for="name">Nombre:</label>
                <br />
                <input type="text" id="name" value={name} onChange={handleNameChange}/>
                <br />
                <label for="lastname">Apellido:</label>
                <br />
                <input type="text" id="lastname" value={lastname} onChange={handleLastnameChange}/>
                <br />

                <button type="button" onClick={updateUser}>Guardar cambios</button>
            </form>


        </div>
    )
};

export default EditAccount;