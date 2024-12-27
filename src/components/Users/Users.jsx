import React, { useEffect, useState } from "react";
import './Users.css';
import { getUsers, userDelete, userUpdate } from "../Services/Services";
import GlobalModal from "../GlobalModal/GlobalModal";

const Users = () => {

    const [activeModal, setActiveModal] = useState(false);
    const [users, setUsers] = useState([]); 
    const [currentUser, setCurrentUser] = useState('');
    const [currentUsername, setCurrentUsername] = useState('');

    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');

    const toggleGlobalModal = (item, editMode = false) => {
        console.log(item)
        setCurrentUser(item.id);
        setCurrentUsername(item.firstName + ' ' + item.lastName);
        setActiveModal(!activeModal);
        setName(item.firstName);
        setLastName(item.lastName);
        setIsEditMode(editMode);

        setId(item.id);
        setEmail(item.email);
        setUsername(item.username);
    };


    const loadUsers = async () => {
        try {
            const user_data = await getUsers();
            setUsers(user_data);
        } catch (error) {
            console.error('Error al recuperar usuarios: ', error);   
        }
    };

    const deleteUser = async () => {
        try {
            await userDelete(currentUser);
            loadUsers();
            setActiveModal(!activeModal);
        } catch (error) {
            console.error('Error al eliminar el usuario');
        }
    };

    const updateUser = async () => {
        try {
            await userUpdate(name, lastname, currentUser, email);
            loadUsers();
            setActiveModal(!activeModal);
        } catch (error) {
            console.error('Error al actualizar el usuario');
        }
    };

    useEffect(() => {
        loadUsers();
    }, [])

    return(
        <>
            <div className="users-container">
                <h1>Tabla de usuarios</h1>

                <div className="users-table-contianer">
                    <table className="users-table">
                        <tr>
                            <th>ID</th>
                            <th>Nombre de usuario</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo electrónico</th>
                            <th>Acciones</th>
                        </tr>

                        {users.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td className="action-buttons" id={item.id}>
                                        <button className="edit-user" onClick={() => toggleGlobalModal(item, true)}><img src="./images/edit.svg" alt="" /></button>
                                        <button className="delete-user" onClick={() => toggleGlobalModal(item, false)}><img src="./images/cross.svg" alt="" /></button>
                                    </td>
                                </tr>
                            )
                        })}

                    </table>

                </div>

            </div>
            <GlobalModal 
                show={activeModal} 
                handleClose={() => setActiveModal(false)} 
                action={isEditMode ? updateUser : deleteUser} 
                option={isEditMode ? "Guardar Cambios" : "Eliminar"}
            >
                {isEditMode ? (
                    <div className="modal-edit-user">
                        <h2>Editar usuario</h2>
                        <label >Usuario</label>
                        <input type="text" value={username} disabled/>

                        <label >Id</label>
                        <input type="text" value={id} disabled/>

                        <label>Nombre:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        
                        <label>Apellido:</label>
                        <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                        
                        <label>Correo electrónico:</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <button onClick={updateUser}>Guardar cambios</button>
                    </div>
                ) : (
                    <div className="modal-delete-user">
                        <h2>Eliminar usuario</h2>
                        <img src="./images/warning.svg" alt="" />
                        <p>¿Estás seguro que quieres eliminar a {currentUsername}?</p>
                        <button onClick={deleteUser}>Eliminar</button>
                    </div>
                    
                )}
            </GlobalModal>
        </>
    )
}

export default Users;