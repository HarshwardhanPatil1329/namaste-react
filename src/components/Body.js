import { useContext, useEffect, useState } from "react";
import { RestauranttList } from "../utils/mockData";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { UserContext }  from "../utils/UserContext";

const Body = () =>{
    const [listRestaurants,setlistRestaurants] = useState([])
    const [filterRestaurants,setFilterRestaurants]=useState([])
    const [searchText, setSearchText] = useState("");
    // const {loggedInUser,setUser} = useContext(UserContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7049873&lng=74.24325270000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        const swiggyData=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
        setlistRestaurants(swiggyData)
        // console.log(swiggyData);
        
        setFilterRestaurants(swiggyData)
    }
    
    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check internet connection;</h1>

    
    return listRestaurants?.length === 0 ? <Shimmer/> :(
            <div className="body">

                <div className="flex">
                    <div className="m-4 p-4">
                        <input type="text" className="border border-solid border-black outline-none" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                        <button className="m-4 px-4 py-2 bg-green-100 rounded-lg" onClick={()=>{
                            const data= listRestaurants.filter((res)=>res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
                            
                            setFilterRestaurants(data)
                        }}>search</button>
                    </div>
                    <div className="m-4 p-4">
                    <button className="m-4 py-2 px-4 bg-gray-100 rounded-lg"
                        onClick={()=>{
                            const filterData=listRestaurants.filter(
                                (res)=>res?.info?.avgRating > 4
                            )
                            setlistRestaurants(filterData)
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                    </div>

                </div>
                    
                    <div className="flex flex-wrap">
                            {
                                    filterRestaurants?.map((restaurant)=>( 
                                        <Link 
                                        key={restaurant?.info?.id}
                                        to={"/restaurants/"+restaurant?.info?.id}  > 
                                        {restaurant?.info?.veg ? (<RestaurantCardPromoted resData={restaurant?.info}/>) :(<RestaurantCard  resData={restaurant?.info} />)} 
                                        </Link>
                                    ))
                            }
                    </div>

            </div>
    )
}
export default Body;