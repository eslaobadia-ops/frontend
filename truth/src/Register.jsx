
import axios from 'axios'
import { useState } from 'react'

const API = 'https://website-backend-2xfi.onrender.com'

export default function Register(){
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const submit = async ()=>{
    try{
      await axios.post(API+'/auth/register',{username,password})
      alert('Registration success')
    }catch(e){
      alert('Registration failed')
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button onClick={submit}>Register</button>
    </div>
  )
}
