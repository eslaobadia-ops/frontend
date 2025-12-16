
import React, { useState } from 'react'
import axios from 'axios'

const API = "https://website-backend-2xfi.onrender.com"

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState(null)
  const [message, setMessage] = useState("")

  const login = async () => {
    try {
      const res = await axios.post(API + "/login", { username, password })
      setToken(res.data.token)
      setMessage("Login successful")
    } catch {
      setMessage("Login failed")
    }
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Jaycrest School Portal</h1>
      {!token ? (
        <>
          <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} /><br/><br/>
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/><br/>
          <button onClick={login}>Login</button>
          <p>{message}</p>
        </>
      ) : (
        <h2>Welcome, Admin</h2>
      )}
    </div>
  )
}
