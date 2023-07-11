import "bootstrap/dist/css/bootstrap.min.css";


const UserTable = (props) =>{
    return(

        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name </th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => props.editForm(user)} className="btn btn-muted">Edit</button>
                                <button onClick={() => props.deleteUser(user.id)} className="btn btn-muted">Delete</button>
                            </td>
                        </tr>
                   
                    ))
                ):(
                    <tr>
                        <td colSpan={3} className="text-center"> NO USERS</td>
                    </tr>
                )
            }
               
            </tbody>
        </table>
    )
}

export default UserTable;