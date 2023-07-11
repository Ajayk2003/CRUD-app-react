import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./Table/userTable";
import AddUserForm from "./Forms/Adduser";
import EditUserForm from "./Forms/Edituser";

function App() {

    //Data Variables
    const userData = [
    {
            id:1,name:"Ajay",username:"ajay1280",
        },
        {
            id:2,name:"kumar",username:"kuamr222",
        }, 
        {
            id:3,name:"veena",username:"veena666",
        },
    ]

    const userInitialState = {id:null,name:'',username:''}

   

    
    //stateHooks 
    const[Users, setUsers] = useState(userData);
    const[CurrentUser,setCurrentuser] = useState(userInitialState)
    const[Editing,setEditing] = useState(false)

   

    //Functions
    const addUser = (user) => {
        user.id = Users.length + 1;
        setUsers([...Users,user])
    }

    const deleteUser = (id) => {
        setUsers(Users.filter((user) => user.id!==id))
        setEditing(false);
    }

    const editForm = (user) => {
        setEditing(true);
        setCurrentuser({id:user.id,name:user.name,username:user.username})
        
    }

    const updateUser = (id,updatedUser) => {
        setEditing(false);
        setUsers(Users.map((user) => (
            user.id === id?
            updatedUser:user
        )))
    }
    
  
   

    //JSX returns
    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <h1 className="text-center">Crud App</h1>
                    </div>
                    {console.log(Editing)}
                    {Editing? 
                        <div className="col-md-6">
                            <EditUserForm 
                                setEditing = {setEditing}
                                CurrentUser = {CurrentUser}
                                updateUser = {updateUser}
                            />
                        </div>
                        :
                        <div className="col-md-6">
                            <AddUserForm addUser = {addUser} />  
                        </div>
                        
                    
                    }
                    
                    <div className="col-md-6">
                        <h3>View Users</h3>
                        <UserTable 
                            users = {Users} 
                            deleteUser = {deleteUser} 
                            editForm = {editForm}
                            setEditing = {setEditing}
                        />
                    </div>
                </div>
        </div>
    )
}

export default App;