
import { useState, useEffect } from "react";
import { UserService } from "./userservice";
import "./project3.css"


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

    //Llevamos el usuario al formulario para editarlo posteriormente (al pulsar en su botón)
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

    //VALIDACIONES
    //validar que solo se puedan escribir letras en las casillas
    function valideKey(evt) {

        // code es la representación ASCII decimal de la tecla presionada.
        var code = evt.which || evt.keyCode;

        if (code === 8 || code === 9) {
             // Permitir retroceso (backspace) y tabulación (tab).
            return true;
        } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            // Permitir letras (A-Z y a-z).
            return true;
        } else if (code >= 48 && code <= 57) {
            // Bloquear números (0-9).
            evt.preventDefault();
            return false;
        } else {
            // Bloquear otras teclas.
            evt.preventDefault();
            return false;
        }
    }


    const valideNumKey = (evt) => {
        // code es la representación ASCII decimal de la tecla presionada.
        const code = evt.which || evt.keyCode;
    
        if (code === 8) {
          // Permitir retroceso (backspace).
          return true;
        } else if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) {
            // Permitir números del 0 al 9 tanto en el teclado de letras como en el teclado numérico.
          return true;
        } else {
          // Bloquear otras teclas.
          evt.preventDefault();
          return false;
        }
      };




    

    return (

        <>

            {/* Navbar */}

            <div class="container" id="mainContainer">

                <nav class="navBar">
                    <a href="../landingPage/index.html">
                        <img class="link" id="logo" src="public/logo.svg" alt="logo"></img>
                    </a>
                    <div class="iconHolder">

                        <div class="homeIcon">
                            <img class="icon" src="public/home-mobile-ui-svgrepo-com.svg" alt="icon-home"></img>
                            <h3> <a class="link" href="../landingPage/index.html">Home</a> </h3>
                        </div>
                        <div class="helpIcon">
                            <img class="icon" src="public/help-circle-svgrepo-com.svg" alt="icon-help"></img>
                            <h3> <a class="link" href="#">Help</a> </h3>
                        </div>

                    </div>

                </nav>

            </div>


            {/* Formulario */}


            <section class="mainGroup">

                <section class="formulary-background">

                    <form class="formulary">

                        <label>
                            <input type="text" htmlFor="username" name="username" id="textname" value={user.name} onChange={handlenameChange} onKeyDown={(event) => valideKey(event)} placeholder="Nombre" className="input" required />
                        </label>
                        <label >
                            <input type="text" htmlFor="userLastName" name="userlastName" id="textLastName" value={user.lastName} onChange={handlelastNameChange} onKeyDown={(event) => valideKey(event)} placeholder="Primer Apellido" className="input" required />
                        </label>
                        <label >
                            <input type="text" htmlFor="secondLastName" name="secondLastName" id="textsecondLastName" value={user.secondLastName} onChange={handlesecondLastNameChange} onKeyDown={(event) => valideKey(event)} placeholder="Segundo Apellido" className="input" required />
                        </label>
                        <label>
                            <input type="email" htmlFor="email" name="email" id="email" value={user.email} onChange={handleemailChange} placeholder="Email" className="input" required />
                        </label>
                        <label>
                            <input type="text" htmlFor="telephone" name="telephone" id="telephone" value={user.telephone} onChange={handletelephoneChange}  onKeyDown={(event) => valideNumKey(event)} placeholder="Teléfono" className="input" required />
                        </label>

                        <button onClick={handleAddUserToList} class="send-button">Añadir usuario</button>
                    </form>
                </section>


                {/* Tabla */}


                <section>
                    <div className="list">

                        <h1 id="table-title">Lista</h1>

                        <table className="listTable">

                            <thead>

                                <tr>
                                    <th>Nombre</th>
                                    <th>Primer Apellido</th>
                                    <th>Segundo Apellido</th>
                                    <th>E-mail</th>
                                    <th>Teléfono</th>
                                    <th>Eliminar</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">

                                {
                                    userList.map((user, index) => (
                                        <tr key={index}>
                                            <td>
                                                {user.name}
                                            </td>
                                            <td>
                                                {user.lastName}
                                            </td>
                                            <td>
                                                {user.secondLastName}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                            <td>
                                                {user.telephone}
                                            </td>
                                            <td>
                                                <img src="public/delete-icon.svg" class="edit-icon" alt="Editar"
                                                    onClick={() => handleDeleteUser(user.id)}></img>
                                                {/* <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button> */}
                                            </td>
                                            <td>
                                                <img src="public/edit-icon.svg" class="delete-icon" alt="Editar"
                                                    onClick={() => handleEditUser(user)}></img>
                                                {/* <button onClick={() => handleEditUser(user)}>Editar</button> */}
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table >
                    </div>
                </section>
            </section>



            {/* Formulario */}

            {/* <section class="mainGroup">

                <section class="formulary-background">

                <form class="formulary">
                    
                    <label>
                        <input type="text" htmlFor="username" name="username" id="textname" value={user.name} onChange={handlenameChange} className="input"/>
                    </label>
                    <label >
                        <input type="text" htmlFor="userLastName" name="userlastName" id="textLastName" value={user.lastName} onChange={handlelastNameChange} className="input" />
                    </label>
                    <label >
                        <input type="text" htmlFor="secondLastName" name="secondLastName" id="textsecondLastName" value={user.secondLastName} onChange={handlesecondLastNameChange} className="input" />
                    </label>
                    <label>
                        <input type="text" htmlFor="email" name="email" id="email" value={user.email} onChange={handleemailChange} className="input" />
                    </label>
                    <label>
                        <input type="text" htmlFor="telephone" name="telephone" id="telephone" value={user.telephone} onChange={handletelephoneChange} className="input" />
                    </label>

                    <button onClick={handleAddUserToList} class="send-button">Añadir usuario</button>
</form>
                </section>
            </section> */}


            {/* <ol>

                    {
                        userList.map((user, index) => (
                            <li key={index}> {user.name} {user.lastName} {user.secondLastName} {user.email}
                                {user.telephone}
                                <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                                <button onClick={() => handleEditUser(user)}>Editar</button>
                            </li>
                        ))
                    }

                </ol> */}


        </>

    )
}

export default UserList;