
import axios from 'axios'
import { useState } from 'react'

const API = 'https://website-backend-2xfi.onrender.com'

export default function Login(){
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const submit = async ()=>{
    try{
      const res = await axios.post(API+'/auth/login',{username,password})
      alert('Login success')
      console.log(res.data)
    }catch(e){
      alert('Login failed')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button onClick={submit}>Login</button>
    </div>
  )
}
