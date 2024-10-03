import React from "react"

class UserCLass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userInfo:"Dummy",
            avatar_url:"xyz",
            location:"Default"
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/HarshwardhanPatil1329')
        const json = await data.json()

        this.setState({
            userInfo:json,
        })
        console.log(json);
        
    }
    
    render(){
        const {name,location,avatar_url}= this.state.userInfo
        return <div className="user-card">
        <img className="git-img" src={avatar_url}/>
        <h2>Name: { name}</h2>
        <h3>Location: {location}</h3>
        <h4>harshwardhanbpatil@gmail.com</h4>
    </div>
    }
}
export default UserCLass