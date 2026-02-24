"use client"

export default function UserList({ users, refresh }) {
  const deleteUser = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
      method: "DELETE"
    })
    refresh()
  }

  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] shadow-2xl overflow-hidden">
      {/* Table Header Section */}
      <div className="bg-gray-100/50 backdrop-blur-md px-8 py-4 flex justify-between text-xs font-bold uppercase tracking-widest text-gray-700 border-b border-white/10">
        <span className="w-1/2">User Identity</span>
        <span className="w-1/4 text-center">Status</span>
        <span className="w-1/4 text-right">Actions</span>
      </div>

      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {users.length === 0 ? (
          <div className="p-20 text-center text-white/50 italic">No data found</div>
        ) : (
          users.map((user, index) => (
            <div 
              key={user.id} 
              className={`flex items-center justify-between px-8 py-5 transition-all hover:bg-white/40 ${
                index % 2 === 0 ? "bg-white/20" : "bg-transparent"
              }`}
            >
              <div className="flex items-center gap-4 w-1/2">
                <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                  👤
                </div>
                <div className="truncate">
                  <p className="font-bold text-gray-900 leading-tight">{user.name}</p>
                  <p className="text-sm text-indigo-900/60 font-medium truncate">{user.email}</p>
                </div>
              </div>

              <div className="w-1/4 flex justify-center">
                <span className="bg-emerald-100/80 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter border border-emerald-200">
                  Active
                </span>
              </div>

              <div className="w-1/4 text-right">
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-rose-500/90 hover:bg-rose-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md active:scale-90"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}