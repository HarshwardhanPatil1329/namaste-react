/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
import React, { lazy,Suspense,useEffect,useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import {UserContext} from "./utils/UserContext"
// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout=()=>{
        const [user, setUser] = useState();

        useEffect(()=>{
                const data ={name:"Harshwardhan"};
                setUser(data.name)
        },[])
            
        return(
                <div className="app">
                <Header/>
                <Outlet/>
                </div>

        )
}

const appRouter = createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[
                        {
                                path:"/",
                                element:<Body/>
                        },
                        {
                                path:"/about",
                                element:<About/>
                        },
                        {
                                path:"/contact",
                                element:<Contact/>
                        },
                        {
                                path:"/grocery",
                                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
                        },
                        {
                                path:"/restaurants/:resId",
                                element:<RestaurantMenu/>
                        }

                ],
                errorElement:<Error/>
        },
        
])

const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)