import { useEffect, useState } from "react"

export default function EditUserForm(props) {

    //State Hooks

    const[user,setUser] = useState(props.CurrentUser)

    //Effect Hooks
    useEffect(() => {
        setUser(props.CurrentUser)
    },[props])


    //Functions

    
    const HandleChange = (event) => {
        const{name,value} = event.target
        setUser({...user,[name]:value})
    }
    
    
    const OnSubmit = (e) => {
        e.preventDefault();
        if(!user.name||!user.username) return;
        props.updateUser(user.id,user) 
        
    }


    //JSX returns
    return(
        <div className="col-md-6">
            <h3>Edit User Form</h3>
            <form onSubmit={OnSubmit}>
                <label>
                    Name
                <input value = {user.name} 
                    onChange={HandleChange} 
                    name="name" 
                    type="text" 
                    className="form-control"
                />
                </label>
                <br></br>
                <label className="form-label">
                User name
                    <input value = {user.username} 
                        type="text" 
                        onChange={HandleChange} 
                        name="username" 
                        className="form-control" 
                    />
                </label>
                <br></br>
                <input className="btn btn-primary" value="Update User" type="submit"/>
                <button className="btn btn-danger m-2" onClick={() => props.setEditing(false)}>Cancel</button>
            </form>
        </div>
    )
}