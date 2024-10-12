import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {

    const storedUsername = sessionStorage.getItem('stored_username');
    const storedName = sessionStorage.getItem('stored_name');
    const storedLastname = sessionStorage.getItem('stored_lastname');
    const storedEmail = sessionStorage.getItem('stored_email');

    const [profilePicture, setProfilePicture] = useState('');

    const user_options = [
        {
            option: 'Actualizar tus datos',
            link: '/EditAccount',
        },
        {
            option: 'Mis pedidos',
            link: '/Orders',
        },
        {
            option: 'Seguridad',
            link: '/Security',
        },
    ];

    const handleOnClick = (link) => {
        window.location = link;
    }

    const triggerFileInput = () => {
        document.getElementById("fileInput").click();
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div  className="profile-container">

            <h1>Mi cuenta</h1>
            
            <div className="personal-info">
                <div className="profile-picture-container">
                    <div className="profile-picture-wrapper">
                        <img src="/images/user.svg" alt="" className="profile-picture"/>
                    </div>
                    
                    
                    <input type="file" id="fileInput" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload}/>
                    <img src="/images/add.svg" alt="" className="new-image" onClick={() => triggerFileInput()}/>
                </div>

                <div className="info">
                    <ul>
                        <li>Usuario: {storedUsername}</li>
                        <li>Nombre: {storedName} {storedLastname}</li>
                        <li>Correo electrónico: {storedEmail}</li>
                    </ul>
                </div>
            </div>

            <div className="profile-options">
                {user_options.map((item, index) => (
                    <div className="profile-option" onClick={() => (handleOnClick(item.link))}>
                        <p>{item.option}</p>
                        <img className="down-arrow" src="./images/down-arrow.svg" alt="down-arrow" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default UserProfile;