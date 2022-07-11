import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then (res => setUsers(res.data))
  },[])

  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then (res => setUsers(res.data))
  }

  const deleteUser = (id) =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
  }

  return (
    <div className="App">
      <h1>Trabajo practico</h1>
      <UserForm 
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
      />
      <UserList 
        users={users}
        setUserSelected={setUserSelected}
        deleteUser={deleteUser}
      />
    </div>
  )
}

export default App;
