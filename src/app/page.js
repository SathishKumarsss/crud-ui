"use client"
import { useEffect, useState } from "react"
import UserForm from "./components/UserForm"
import UserList from "./components/UserList"

export default function Home() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      const data = await res.json()
      setUsers(data)
    } catch (error) {
      console.error("Fetch error:", error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=2071')] bg-cover bg-fixed bg-center flex items-center justify-center p-4 md:p-10">
      {/* Darkening Overlay */}
      <div className="fixed inset-0 bg-black/20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-3xl space-y-8">
        <header className="flex justify-between items-center px-6">
          <h1 className="text-white text-4xl font-bold tracking-tight drop-shadow-lg">
            Simple List
          </h1>
        </header>

        <UserForm onUserAdded={fetchUsers} />
        <UserList users={users} refresh={fetchUsers} />
      </div>
    </main>
  )
}