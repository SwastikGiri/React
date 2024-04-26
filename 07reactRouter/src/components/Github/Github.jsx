import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(resp=>resp.json())
    //     .then(data=>setData(data))
    // },[])
    
  return (
    <div className=' text-center bg-gray-300 m-4 text-3xl'>Github Followers: {data.followers}</div>
  )
}

export default Github
 
export const githubInfoLoader = async () =>
{ const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}