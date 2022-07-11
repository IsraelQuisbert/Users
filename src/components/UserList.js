import React from 'react';

const UserList = ({users, setUserSelected, deleteUser}) => {

    return (
        <div>
            <h2>Lista</h2>
            {
                users.map( user=>(
                    <li key={user.id}>
                        <p>{user.first_name}, {user.last_name}</p>
                        <p>{user.email}</p>
                        <p>{user.birthday}</p>
                        <button onClick={() =>setUserSelected(user)}>Editar</button>
                        <button onClick={() =>deleteUser(user.id)}>Eliminar</button>
                    </li>
                ))
            }
        </div>
    )
};

export default UserList;