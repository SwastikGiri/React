import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {id}=useParams()
    return (
    <div className=' text-center text-2xl text-blue-800'>Welcome : {id}</div>
  )
}

export default User