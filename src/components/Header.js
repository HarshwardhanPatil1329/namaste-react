import { useContext, useState } from "react";
import { lOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header=()=>{
        const [btnName,setName] = useState("Login")

        

        const onlineStatus = useOnlineStatus();
    return(
            <div className="flex justify-between bg-pink-100 ">
                    <div className="logo-container">
                            <img className="w-36" src={lOGO_URL}/>
                    </div>
                    <div className="flex items-center ">
                            <ul className="flex p-4 m-4 ">
                                    <li className="px-4">
                                        {
                                         onlineStatus === true ?  <div style={{border:"1px solid green", borderRadius:"50%", height:"20px",width:"20px", backgroundColor:"green"}}></div> : <div style={{border:"1px solid red", borderRadius:"50%", height:"20px",width:"20px", backgroundColor:"red"}}></div>
                                               
                                        }
                                    </li>
                                    <li className="px-4">
                                        <Link className={"link-styles"} to="/">Home</Link></li>
                                    <li className="px-4">
                                        <Link className={"link-styles"} to="/about">About Us</Link>
                                    </li>
                                    <li className="px-4">
                                        <Link className={"link-styles"} to="/contact"> Contact Us</Link>
                                    </li>
                                    <li className="px-4">
                                        <Link className={"link-styles"} to="/grocery"> Grocery</Link>
                                    </li>
                                    <li className="px-4">Cart</li>
                                    <button className="login" onClick={()=>{setName(btnName === "Login" ? "Logout" : "Login")}}>{btnName}</button>
                            </ul>   
                    </div>
            </div>
    )
}
export default Header;