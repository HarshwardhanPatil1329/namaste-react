import React from 'react'
import User from './User'
import UserCLass from './UserClass'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <h2>This is About Page..........</h2>
        {/* <User/> */}
        <UserCLass name={"Harsh (class component)"}/>
    </div>
  )
}

export default About
