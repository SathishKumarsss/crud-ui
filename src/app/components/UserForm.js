"use client"
import { useState } from "react"

export default function UserForm({ onUserAdded }) {

const [name,setName] = useState("")
const [email,setEmail] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

if(!name || !email) return

await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`,{
method:"POST",
headers:{ "Content-Type":"application/json"},
body: JSON.stringify({name,email})
})

setName("")
setEmail("")
onUserAdded()
}

return(

<form
onSubmit={handleSubmit}
style={{
display:"flex",
flexWrap:"wrap",
gap:"10px",
marginBottom:"20px"
}}
>

<input
placeholder="Enter Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{
flex:"1 1 200px",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<input
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
flex:"1 1 200px",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button
type="submit"
style={{
flex:"1 1 120px",
background:"#4f46e5",
color:"#fff",
border:"none",
padding:"10px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Add User
</button>

</form>

)

}