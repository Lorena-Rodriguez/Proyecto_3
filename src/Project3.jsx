
import { useState, useEffect } from "react";

const UserList = () =>{

   
    const [user, setUser] = useState({  
        name:'',
        lastName:'',
        secondLastName:'',
        email: '',
        telephone:'',

    });

    const [userList, setUserList] = useState([]);

    function handleNameChange(e){
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


    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, user]);

 
        setUser({...user, name: '', lastName: '', secondLastName: '', email: '', telephone: '' });
        document.getElementById("textName").value = "";
        document.getElementById("textLastName").value = "";
        document.getElementById("secondLastName").value = "";
        document.getElementById('email').value = "";
        document.getElementById("telephone").value = "";
      }

         console.log(userList);

    return(
        <>
        <h1>24 hour Party People</h1>
       

        <label >
        <input type="text" htmlFor="userName" name="userName" id="textName" value={user.name} onChange={handleNameChange}/>
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
        <ol>

        {
            userList.map((user, index)=>(
                <li key={index}> {user.name} {user.lastName} {user.secondLastName} {user.email} {user.telephone} </li>
            ))
        }

        </ol>
        </>
        
    )
}

export default UserList;