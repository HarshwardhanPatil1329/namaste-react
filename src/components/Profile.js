import React, { useEffect, useState } from 'react'

const Profile = (props) => {
  const [count,setCount] = useState(0)

  useEffect(()=>{
    const timer=setInterval(()=>{
        console.log("namaste harsh");
        
    },1000)

    return()=>{
        clearInterval(timer)
    }
  },[])
    return (
    <div>
        <h2>Profile Component</h2>
        <h3>Name:{props.name}</h3>
        <h3>Count:{count}</h3>
        <button onClick={()=>{
            setCount(1)
        }}>
            Count
        </button>
    </div>
  )
}

export default Profile
