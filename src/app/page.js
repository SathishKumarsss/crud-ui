"use client"
import { useEffect, useState } from "react"
import UserForm from "./components/UserForm"
import UserList from "./components/UserList"

export default function Home() {

  const [users,setUsers] = useState([])

  const fetchUsers = async () => {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      const data = await res.json()
      setUsers(data)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return (

<main
style={{
minHeight:"100vh",
background:"linear-gradient(135deg,#4f46e5,#06b6d4)",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"20px"
}}
>

<div
style={{
width:"100%",
maxWidth:"700px",
background:"#fff",
padding:"25px",
borderRadius:"12px",
boxShadow:"0 10px 30px rgba(0,0,0,0.2)"
}}
>

<h1 style={{textAlign:"center",marginBottom:"5px"}}>
User Management
</h1>

<p style={{textAlign:"center",color:"#666",marginBottom:"20px"}}>
Add and manage users easily
</p>

<UserForm onUserAdded={fetchUsers}/>
<UserList users={users} refresh={fetchUsers}/>

</div>

</main>

  )
}