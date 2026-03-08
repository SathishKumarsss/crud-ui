"use client"

export default function UserList({ users, refresh }) {

const deleteUser = async(id)=>{
await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,{
method:"DELETE"
})
refresh()
}

return(

<div>

{users.length === 0 ? (
<p style={{textAlign:"center",color:"#777"}}>No users found</p>
) : (

users.map((user)=>(
<div
key={user.id}
style={{
display:"flex",
flexWrap:"wrap",
justifyContent:"space-between",
alignItems:"center",
padding:"12px",
border:"1px solid #eee",
borderRadius:"8px",
marginBottom:"10px",
gap:"10px"
}}
>

<div style={{flex:"1 1 200px"}}>
<p style={{margin:0,fontWeight:"600"}}>{user.name}</p>
<p style={{margin:0,color:"#666",fontSize:"14px"}}>{user.email}</p>
</div>

<button
onClick={()=>deleteUser(user.id)}
style={{
background:"#ef4444",
color:"#fff",
border:"none",
padding:"6px 12px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Delete
</button>

</div>
))

)}

</div>

)

}