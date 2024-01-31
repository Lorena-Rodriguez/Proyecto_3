
import { useState, useEffect } from "react";
import { UserService } from "./userservice";

const UserList = () => {


    const [user, setUser] = useState({
        name: '',
        lastName: '',
        secondLastName: '',
        email: '',
        telephone: '',

    });

    const [userList, setUserList] = useState([]);




    async function getData() {
        let users = await UserService.getAllUsers();
        setUserList(users)
    }
    getData();

    //  si tenemos id de usuario es que vamos a editar y si no tiene id se crea uno nuevo y se añade al listado.
    // Finalmente se resetea el formulario 
    async function handleAddUserToList() {

        console.log('user ' + JSON.stringify(user));

        if (user.id === undefined) {
            await UserService.submitUser(user);
        } else {
            await UserService.updateUser(user);
        }

        setUser({ name: '', lastName: '', secondLastName: '', email: '', telephone: '' });

    }

    //Llevamos el usuario al formulario para editarlo posteriormente.
    async function handleEditUser(user) {

        //  console.log('user '+user);
        // console.log('user '+JSON.stringify(user));

        setUser(user);

    }


    async function handleDeleteUser(id) {
        await UserService.deleteUser(id);
    }




    function handlenameChange(e) {
        setUser({
            ...user, name: e.target.value
        });
    };
    function handlelastNameChange(e) {
        setUser({
            ...user, lastName: e.target.value
        });
    };
    function handlesecondLastNameChange(e) {
        setUser({
            ...user, secondLastName: e.target.value
        });
    };
    function handleemailChange(e) {
        setUser({
            ...user, email: e.target.value
        });
    }
    function handletelephoneChange(e) {
        setUser({
            ...user, telephone: e.target.value
        });
    }


    // async function handleAddUserToList() {
    //     // setUserList(prevUserList => [...prevUserList, user]);
    //     await UserService.submitUser(user);

    //     setUser({ name: '', lastName: '', secondLastName: '', email: '', telephone: '' });

    // }







    return (
        <>
            <h1>24 hour Party People</h1>


            <label >
                <input type="text" htmlFor="username" name="username" id="textname" value={user.name} onChange={handlenameChange} />
            </label>
            <label >
                <input type="text" htmlFor="userLastName" name="userlastName" id="textLastName" value={user.lastName} onChange={handlelastNameChange} />
            </label>
            <label >
                <input type="text" htmlFor="secondLastName" name="secondLastName" id="textsecondLastName" value={user.secondLastName} onChange={handlesecondLastNameChange} />
            </label>
            <label>
                <input type="text" htmlFor="email" name="email" id="email" value={user.email} onChange={handleemailChange} />
            </label>
            <label>
                <input type="text" htmlFor="telephone" name="telephone" id="telephone" value={user.telephone} onChange={handletelephoneChange} />
            </label>


            <button onClick={handleAddUserToList}>Añadir usuario</button>
            {/* LORENA */}
            {/* <button onClick={handleNameChange}>Editar usuario</button> */}
            <ol>

                {
                    userList.map((user, index) => (
                        <li key={index}> {user.name} {user.lastName} {user.secondLastName} {user.email}
                            {user.telephone}
                            <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                            <button onClick={() => handleEditUser(user)}>Editar</button>
                        </li>
                    ))
                }

            </ol>


        </>

    )
}

export default UserList;