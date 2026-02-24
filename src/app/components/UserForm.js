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
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            className="w-full bg-white/90 border-none rounded-2xl py-4 px-6 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-inner"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <input
            className="w-full bg-white/90 border-none rounded-2xl py-4 px-6 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none transition shadow-inner"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition transform active:scale-95 shadow-lg whitespace-nowrap"
        >
          + Add Item
        </button>
      </form>
    </div>
  )
}