"use client"
import { useState } from "react"

export default function UserForm({ onUserAdded }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email) return

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    })

    setName("")
    setEmail("")
    onUserAdded()
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn" type="submit">
        Add User
      </button>
    </form>
  )
}