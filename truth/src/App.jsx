
import React from 'react'
import Login from './Login'
import Register from './Register'

export default function App() {
  return (
    <div style={{fontFamily:'Arial', padding:'40px'}}>
      <h1>Jaycrest School Portal</h1>
      <Login />
      <hr/>
      <Register />
    </div>
  )
}
