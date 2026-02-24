"use client"

export default function UserList({ users, refresh }) {

  const deleteUser = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      method: "DELETE"
    })
    refresh()
  }

  return (
    <div className="list">
      {users.length === 0 && <p className="empty">No users found</p>}

      {users.map((user) => (
        <div key={user.id} className="list-item">
          <div>
            <strong>{user.name}</strong>
            <p className="email">{user.email}</p>
          </div>
          <button
            className="delete-btn"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}