
import { useState, useEffect } from "react";
import { UserService } from "./userservice";

const UserList = () =>{

   
    const [user, setUser] = useState({  
        name:'',
        lastName:'',
        secondLastName:'',
        email: '',
        telephone:'',

    });

    const [userList, setUserList] = useState([]);

    async function getData(){
        let users = await UserService.getAllUsers();
        setUserList(users)
    }
    getData();



    function handlenameChange(e){
        setUser({
            ...user,name:e.target.value});
    };
    function handlelastNameChange(e){
        setUser({
            ...user,lastName:e.target.value});
    };
    function handlesecondLastNameChange(e){              
        setUser({
            ...user,secondLastName:e.target.value});
    };
    function handleemailChange(e){
      setUser({
            ...user,email:e.target.value});
    }
    function handletelephoneChange(e){
      setUser({
            ...user,telephone:e.target.value});
    }


    async function handleAddUserToList() {
        // setUserList(prevUserList => [...prevUserList, user]);
        await UserService.submitUser(user);

        setUser({ name: '', lastName: '', secondLastName: '', email: '', telephone: '' });
       
      }

    
      //LORENA
      const handleUpdateUser = async () => {
        try {
            // Actualiza el usuario en el servidor
            await UserService.updateUser(user.id, user);
        } catch (error) {
            // Maneja el error aquí
            console.error('Ocurrió un error al actualizar el usuario', error);
        }
    };
      function handleNameChange(e){
        const newName = e.target.value;
        setUser({
            ...user,
            name: newname
        });
    
        // Actualiza el usuario en el servidor después de cambiar el nombre
        handleUpdateUser();
    };

         

    return(
        <>
        <h1>24 hour Party People</h1>
       

        <label >
        <input type="text" htmlFor="username" name="username" id="textname" value={user.name} onChange={handlenameChange}/>
        </label>
        <label >
        <input type="text" htmlFor="userLastName" name="userlastName" id="textLastName" value={user.lastName} onChange={handlelastNameChange}/>
        </label>
        <label >
        <input type="text" htmlFor="secondLastName" name="secondLastName" id="textsecondLastName" value={user.secondLastName} onChange={handlesecondLastNameChange}/> 
        </label>
        <label>
        <input type="text" htmlFor="email" name="email" id="email" value={user.email} onChange={handleemailChange}/>
        </label>
        <label>
        <input type="text" htmlFor="telephone" name="telephone" id="telephone" value={user.telephone} onChange={handletelephoneChange}/>
        </label>


        <button onClick={handleAddUserToList}>Añadir usuario</button>
        {/* LORENA */}
        {/* <button onClick={handleNameChange}>Editar usuario</button> */}
        <ol>

        {
            userList.map((user, index)=>(
                <li key={index}> {user.name} {user.lastName} {user.secondLastName} {user.email} {user.telephone} <button onClick={handleNameChange}>Editar usuario</button></li>
            ))
        }

        </ol>

      
        </>
        
    )
}

export default UserList;