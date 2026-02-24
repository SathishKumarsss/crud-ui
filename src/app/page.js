"use client"

import { useEffect, useState } from "react"
import UserForm from "../app/components/UserForm"
import UserList from "../app/components/UserList"

export default function Home() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Next.js CRUD App</h1>
      <UserForm onUserAdded={fetchUsers} />
      <UserList users={users} refresh={fetchUsers} />
    </div>
  )
}