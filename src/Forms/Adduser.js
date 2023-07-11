import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


export default function AddUserForm({addUser}){
    const userInitialState = {id:null,name:'',username:''}
    const[user,setUser] = useState(userInitialState);

    const HandleChange = (event) => {
        const{name,value} = event.target
        setUser({...user,[name]:value})
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        if(!user.name||!user.username) return;
        addUser(user)
        setUser(userInitialState)
    }

    return (
        
        <div className="col-md-6">
            <h3>Add User</h3>
            <form onSubmit={OnSubmit}>
                <label>
                    Name
                   <input value = {user.name} onChange={HandleChange} name="name" type="text" className="form-control"/>
                </label>
                <br></br>
                <label className="form-label">
                   User name
                    <input value = {user.username} type="text" onChange={HandleChange} name="username" className="form-control" />
                </label>
                <br></br>
                <input className="btn btn-primary" value="Add New User" type="submit"/>
            </form>
        </div>
    )
}

